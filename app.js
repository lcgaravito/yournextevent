var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const configurePassport = require("./configurePassport.js");

const apiRouter = require("./routes/api");
const passportRouter = require("./routes/passportRoutes.js");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

configurePassport(app);

app.use("/", passportRouter);
app.use("/api", apiRouter);

// Serve any static files
app.use(express.static(path.join(__dirname, "front/build")));
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "front/build", "index.html"));
});

module.exports = app;
