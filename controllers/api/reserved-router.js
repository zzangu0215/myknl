const router = require("express").Router();
const { Pet, Reservations, Kennel } = require("../../models");
const withAuth = require("../../util/withAuth");

router.get("/", async (req, res) => {
  try {
    const reserveData = await Reservations.findAll({
      include: [
        {
          model: Pet,
        },
        {
          model: Kennel,
          attributes: ["name"],
        },
      ],
    });
    const reservations = reserveData.map((reservation) =>
      reservation.get({ plain: true })
    );
    // res.render("reservation-list", {
    //   reservations,
    //   logged_in: req.session.logged_in,
    // });
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: "No pet found with this id!" });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
