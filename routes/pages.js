const express = require("express");
const router = express.Router();
const path = require("path");
const databaseManager = require("../db/MyMongoDB");

// By Zhiyi Jin
// Get all posts page
router.get("/posts", (req, res) => {
  res.redirect("postList.html");
});

// By Zhiyi Jin
// Create posts page
router.get("/createpost", (req, res) => {
  res.redirect("createPost.html");
});

//Akhila
router.post("/login", async (req, res) => {
  const user = req.body;
  console.log("in routes", user.email);
  if (await databaseManager.auth(user)) {
    console.log("welcome old user");
  }
  res.status(200).redirect("./postList.html");
});

router.post("/signup", async (req, res) => {
  const user = req.body;
  console.log("in routes", user.email);
  if (await databaseManager.insertuser(user)) {
    console.log("welcome");
  }
  res.status(200).redirect("./login.html");
});

// By Zhiyi Jin
// Get post with id
router.get("/posts/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/postDetail.html"));
});

module.exports = router;
