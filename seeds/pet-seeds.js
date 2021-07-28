const { Pet } = require("../models");

const petData = [
  {
    name: "Zzangu",
    user_id: 1,
  },
  {
    name: "Zara",
    user_id: 2,
  },
  {
    name: "Meka",
    user_id: 3,
  },
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
