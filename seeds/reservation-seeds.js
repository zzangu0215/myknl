const { Reservations } = require("../models");

const reservationData = [
  {
    startDate: "08/11/2021",
    endDate: "08/13/2021",
    kennel_id: 1,
    pet_id: 2,
  },
  {
    startDate: "08/23/2021",
    endDate: "08/30/2021",
    kennel_id: 2,
    pet_id: 1,
  },
  {
    startDate: "08/11/2021",
    endDate: "08/13/2021",
    kennel_id: 3,
    pet_id: 3,
  },
];

const seedReservations = () => Reservations.bulkCreate(reservationData);

module.exports = seedReservations;
