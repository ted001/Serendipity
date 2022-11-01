const express = require("express");
const router = express.Router();
const path = require("path");

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

module.exports = router;
