const router = require("express").Router();
const usersRouter = require("./users-router");
const petRouter = require("./pet-router");
const reservedRouter = require("./reserved-router");

router.use("/users", usersRouter);
router.use("/pet", petRouter);
router.use("/reserved", reservedRouter);

module.exports = router;
