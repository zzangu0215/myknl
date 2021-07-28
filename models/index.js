const User = require("./User");
const Pet = require("./Pet");
const Kennel = require("./Kennel");
const KennelPet = require("./KennelPet");

// Define sequelize associations in this file.
// Pet.belongsTo(User, {
//   foreignKey: "user_id",
// });

<<<<<<< Updated upstream
// User.hasMany(Pet, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });
=======
<<<<<<< Updated upstream
User.hasMany(Pet, {
  foreignKey: "user_id",
=======
Pet.hasMany(Kennel, {
  foreignKey: "pet_id",
>>>>>>> Stashed changes
  onDelete: "CASCADE",
});
>>>>>>> Stashed changes

// Kennel.belongsToMany(Pet, {
//   through: {
//     model: KennelPet,
//     unique: true,
//   },
// });
// Kennel.hasMany(Pet, {
//   foreignKey: "pet_id",
//   onDelete: "CASCADE",
// });

// User.belongsTo(Kennel, {
//   foreignKey: "pet_id",
// });

// User.belongsToMany(Pet, {
//   through: {
//     model: Kennel,
//     unique: false,
//   },
// });

module.exports = {
  User,
  Pet,
  Kennel,
  KennelPet,
};
