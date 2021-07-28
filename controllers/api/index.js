const router = require("express").Router();
const usersRouter = require("./users-router");
const petRouter = require("./pet-router");

router.use("/users", usersRouter);
router.use("/pet", petRouter);

module.exports = router;
