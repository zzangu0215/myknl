const { User } = require("../models");

const userData = [
  {
    username: "zzangu",
    password: "password12345",
  },
  {
    username: "vivi",
    password: "password123456",
  },
  {
    username: "izzy",
    password: "password1234567",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
