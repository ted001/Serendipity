//By Zhiyi Jin
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const bodyParser = require("body-parser");
require("dotenv").config();

const postsRouter = require("./routes/posts");
const pagesRouter = require("./routes/pages");

const app = express();
app.use(express.urlencoded({ extended: false }));
//Looks like you have dotenv configured, so I'd recommend adding the session secret as an environment variable instead of including it in the code
app.use(session({ secret: "abc", cookie: {} }));
app.use(bodyParser.json());

//Akhila
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//jin
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", pagesRouter);
app.use("/api/posts", postsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port 3000");
});

module.exports = app;
