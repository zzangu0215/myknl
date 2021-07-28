const { Pet } = require("../models");

const petData = [
  {
    name: "Zzangu",
    breed: "Border Collie",
    weight: 45,
    age: 4,
    isAggressive: false,
    user_id: 1,
  },
  {
    name: "Zara",
    breed: "Mastiff",
    weight: 98,
    age: 5,
    isAggressive: false,
    user_id: 2,
  },
  {
    name: "Meka",
    breed: "German Shepherd",
    weight: 60,
    age: 2,
    isAggressive: true,
    user_id: 3,
  },
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
