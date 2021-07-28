const { Kennel } = require("../models");

const kennelData = [
  {
    name: "Kennel 1",
    capacity: 3,
  },
  {
    name: "Kennel 2",
    capacity: 4,
  },
  {
    name: "Kennel 3",
    capacity: 2,
  },
];

const seedKennels = () => Kennel.bulkCreate(kennelData);

module.exports = seedKennels;
