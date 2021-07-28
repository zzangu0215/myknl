const { KennelPet } = require("../models");

const kennelPetData = [
  {
    pet_id: 2,
    user_id: 1,
  },
  {
    pet_id: 1,
    user_id: 2,
  },
  {
    pet_id: 3,
    user_id: 3,
  },
];

const seedKennelPets = () => KennelPet.bulkCreate(kennelPetData);

module.exports = seedKennelPets;
