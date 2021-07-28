const User = require("./User");
const Pet = require("./Pet");
const Kennel = require("./Kennel");
const Reservations = require("./Reservations");

// Define sequelize associations in this file.
Pet.hasOne(Reservations, {
  foreignKey: "pet_id",
  onDelete: "CASCADE",
});

Reservations.belongsTo(Pet, {
  foreignKey: "pet_id",
});

Kennel.hasMany(Reservations, {
  foreignKey: "kennel_id",
  onDelete: "CASCADE",
});

Reservations.belongsTo(Kennel, {
  foreignKey: "kennel_id",
});

User.hasMany(Pet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
});

// Pet has may reservations, reservations belong to one pet
// Kennel has many reservations, reservations have one kennel
// User has many pets, pet belongs to one user

module.exports = {
  User,
  Pet,
  Kennel,
  KennelPet,
};
