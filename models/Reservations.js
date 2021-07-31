const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Reservations extends Model {}

Reservations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    kennel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "kennel",
        key: "id",
      },
    },
    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pet",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reservations",
  }
);

module.exports = Reservations;
