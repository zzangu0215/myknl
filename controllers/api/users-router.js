const { User } = require("../../models");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create(req.body, { username, password });
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error." });
      }
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("username", username);
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error("User not found.");
    }

    console.log(user.get());
    const isValidPassword = await user.checkPassword(password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error." });
      }
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    console.log(req.body.password);
    res.status(400).json({ message: "Invalid username or password." });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.end();
  });
});

module.exports = router;
