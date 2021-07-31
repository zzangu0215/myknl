const { Reservations } = require("../models");

const reservationData = [
  {
    startDate: "2021-08-11",
    endDate: "2021-08-13",
    kennel_id: 1,
    pet_id: 2,
  },
  {
    startDate: "2021-08-12",
    endDate: "2021-08-13",
    kennel_id: 1,
    pet_id: 3,
  },
  {
    startDate: "2021-08-10",
    endDate: "2021-08-15",
    kennel_id: 1,
    pet_id: 1,
  },
  {
    startDate: "2021-08-23",
    endDate: "2021-08-30",
    kennel_id: 2,
    pet_id: 1,
  },
  {
    startDate: "2021-08-11",
    endDate: "2021-08-13",
    kennel_id: 3,
    pet_id: 3,
  },
];

const seedReservations = () => Reservations.bulkCreate(reservationData);

module.exports = seedReservations;
