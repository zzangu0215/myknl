const seedKennels = require("./kennel-seeds");
const seedPets = require("./pet-seeds");
const seedUsers = require("./user-seeds");
const seedReservations = require("./reservation-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedPets();
  console.log("\n----- PETS SEEDED -----\n");

  await seedKennels();
  console.log("\n----- KENNELS SEEDED -----\n");

  await seedReservations();
  console.log("\n----- RESERVATIONS SEEDED -----\n");

  process.exit(0);
};

seedAll();
