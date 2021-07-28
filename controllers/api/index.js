const router = require("express").Router();
const usersRouter = require("./users-router");

router.use("/users", usersRouter);
router.use("/pet", petRoutes);

module.exports = router;
