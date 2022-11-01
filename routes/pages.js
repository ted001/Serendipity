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
  console.log("in routes", user.email);
  if (await databaseManager.auth(user)) {
    console.log("welcome");
  }
});

router.post("/signup", async (req, res) => {
  const user = req.body;
  console.log("in routes", user.email);
  if (await databaseManager.insertuser(user)) {
    console.log("welcome");
  }
});

module.exports = router;
