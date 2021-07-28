const { Kennel } = require("../models");

const kennelData = [
  {
    name: "Kennel 1",
    location: "San Diego",
    isFull: false,
    pet_id: 2,
    user_id: 1,
  },
  {
    name: "Kennel 2",
    location: "Escondido",
    isFull: true,
    pet_id: 1,
    user_id: 2,
  },
  {
    name: "Kennel 3",
    location: "PB",
    isFull: false,
    pet_id: 3,
    user_id: 3,
  },
];

const seedKennels = () => Kennel.bulkCreate(kennelData);

module.exports = seedKennels;
