// By Zhiyi Jin
const express = require("express");
const router = express.Router();
const databaseManager = require("../db/MyMongoDB");

// Read all posts
router.get("/", async (req, res) => {
  let data;

  try {
    data = await databaseManager.read("posts", {});
  } catch (err) {
    res.send(err);
  }
  res.send(JSON.stringify(data));
});

module.exports = router;
