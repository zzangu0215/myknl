const router = require("express").Router();
const { User, Pet, Kennel, Reservations } = require("../models");
const sequelize = require("../config/connection");

// use withAuth middleware to redirect from protected routes.
const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", async (req, res) => {
  try {
    res.render("home", {
      isLoggedIn: req.session.isLoggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up Page" });
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: Pet }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/aboutus", (req, res) => {
  try {
    res.render("aboutus");
  } catch (err) {
    console.error(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/reservation/dates", (req, res) => {
  try {
    res.render("reserve-calendar");
  } catch (err) {
    console.error(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/reservation/kennel", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: {
        user_id: req.session.userId,
      },
    });

    const pets = petData.map((pet) => pet.get({ plain: true }));

    const startDate = req.query.startDate.substring(0, 10);
    const endDate = req.query.endDate.substring(0, 10);

    const kennelData = await Kennel.findAll({
      include: [
        {
          model: Reservations,
          as: "reservations",
        },
      ],
    });

    const kennels = kennelData.map((kennel) => {
      return {
        ...kennel.get({ plain: true }),
        availability: kennel.availability(startDate, endDate),
      };
    });

    res.render("reserve-kennel", {
      kennels,
      pets,
      startDate,
      endDate,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/reservation-lists", async (req, res) => {
  try {
    const petId = req.query.petId;
    console.log(petId);

    const reservationData = await Reservations.findAll({
      where: {
        pet_id: petId,
      },
    });

    const reservations = reservationData.map((reservation) =>
      reservation.get({ plain: true })
    );

    res.render("reservation-lists", {
      reservations,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

// router.get("/", async (req, res) => {
//   try {
//     let user;
//     if (req.session.isLoggedIn) {
//       user = await User.findByPk(req.session.userId, {
//         exclude: ["password"],
//         raw: true,
//       });
//     }
//     res.render("home", {
//       title: "Home Page",
//       isLoggedIn: req.session.isLoggedIn,
//       user,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
//   }
// });

// router.get("/login", (req, res) => {
//   res.render("login", { title: "Log-In Page" });
// });

// router.get("/signup", (req, res) => {
//   res.render("signup", { title: "Sign-Up Page" });
// });

module.exports = router;
