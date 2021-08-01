const router = require("express").Router();
const { Reservations } = require("../../models");

router.delete("/:id", async (req, res) => {
  try {
    const reservationData = await Reservations.destroy({
      where: {
        id: req.params.id,
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
