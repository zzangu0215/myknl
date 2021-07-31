const router = require("express").Router();
const { Pet, Reservations, Kennel } = require("../../models");
const withAuth = require("../../util/withAuth");

router.post("/kennel", async (req, res) => {
  try {
    const pet = JSON.parse(req.body.pet);
    const kennel = JSON.parse(req.body.kennel);

    const reservationsData = await Reservations.create({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      pet_id: pet,
      kennel_id: kennel,
    });
    res.status(200).json(reservationsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
