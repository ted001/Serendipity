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
  console.log("user", user.email);
  req.session.email = user.email;

  console.log("in routes", req.session.user);
  if (await databaseManager.auth("users", user)) {
    console.log("welcome old user");
    res.status(200).redirect("./postList.html");
  } else {
    res.send(
      `<script>
        alert('Wrong Password');
        window.location.href = './login.html'
      </script>
      `
    );
  }
});

router.post("/signup", async (req, res) => {
  const user = req.body;
  console.log("in routes", user.email);
  if (await databaseManager.insertuser("users", user)) {
    console.log("welcome");
  }
  res.status(200).redirect("./login.html");
});

router.get("/getUser", async (req, res) => {
  console.log("in get", req.session.email);
  let resp = await databaseManager.read("users", {
    email: req.session.email,
  });
  let userName = resp[0]?.FirstName;
  res.json({ name: userName });
});

router.get("/signout", async (req, res) => {
  req.session.destroy();
  res.status(200);

  res.redirect("/");
});

// Get post with id
router.get("/posts/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/postDetail.html"));
});

module.exports = router;
