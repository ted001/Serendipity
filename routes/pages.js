// By Zhiyi Jin
const express = require("express");
const router = express.Router();
const path = require("path");

// By Zhiyi Jin
// Get all posts page
router.get("/posts", (req, res) => {
  res.redirect("postList.html");
});

module.exports = router;
