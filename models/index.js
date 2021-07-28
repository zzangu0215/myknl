const User = require("./User");
const Pet = require("./Pet");
const Kennel = require("./Kennel");

// Define sequelize associations in this file.
User.hasMany(Pet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
});

Kennel.hasMany(Pet, {
  foreignKey: "pet_id",
  onDelete: "CASCADE",
});

User.belongsToMany(Pet, {
  through: {
    model: Kennel,
    unique: false,
  },
});

module.exports = {
  User,
  Pet,
  Kennel,
};
