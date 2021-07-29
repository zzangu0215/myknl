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

router.delete("/:id", async (req, res) => {
  try {
    const reservationData = await Reservations.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!reservationData) {
      res.status(404).json({ message: "No reservation found with this id!" });
      return;
    }

    res.status(200).json(reservationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
