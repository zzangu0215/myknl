const seedKennels = require("./kennel-seeds");
const seedPets = require("./pet-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedKennels();
  console.log("\n----- KENNELS SEEDED -----\n");

  await seedPets();
  console.log("\n----- PETS SEEDED -----\n");

  process.exit(0);
};

seedAll();
