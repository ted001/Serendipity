// By Zhiyi Jin
const express = require("express");
// const { url } = require("inspector");
const router = express.Router();
// const path = require("path");
const databaseManager = require("../db/MyMongoDB");
const bodyparser = require("body-parser");
// By Zhiyi Jin
// Get all posts page
router.get("/posts", (req, res) => {
  res.redirect("postList.html");
});

//Akhila
// const bodyParser = bodyparser.json();

router.post("/login", async (req, res) => {
  const user = req.body;
  console.log("user", user.email);
  req.session.email = user.email;

  console.log("in routes", req.session.user);
  if (await databaseManager.auth(user)) {
    console.log("welcome old user");
    res.status(200).redirect("./postList.html");
  } else {
    console.log("Wrong password");
  }
});

router.post("/signup", async (req, res) => {
  const user = req.body;
  console.log("in routes", user.email);
  if (await databaseManager.insertuser(user)) {
    console.log("welcome");
  }
  res.status(200).redirect("./login.html");
});

router.get("/getUser", (req, res) => {
  console.log("in get", req.session.email);
  res.json({ email: req.session.email });
});

module.exports = router;
