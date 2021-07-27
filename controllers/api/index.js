const router = require('express').Router();
const usersRouter = require('./users-router');
router.use('/users', usersRouter);
module.exports = router;
