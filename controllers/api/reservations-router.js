const router = require("express").Router();
const { Pet, Reservations, Kennel } = require("../../models");
const withAuth = require("../../util/withAuth");

router.post("/", async (req, res) => {
  try {
    const reservationsData = await Reservations.create({
      ...req.body,
    });
    res.status(200).json(reservationsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
