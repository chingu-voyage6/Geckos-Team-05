var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");

// Create dev environment variables
var nodeEnv = process.env.NODE_ENV || "development";
if (nodeEnv === "development") {
  require("dotenv").config()}

// Connect to database & all database models
mongoose.connect(process.env.MONGODB_URI);

// Require application routes
var indexRoutes = require("./routes/index");

// Require application api routes
var apiRoutes = require("./routes/api");

// Point Node to React build files
app.use(express.static(path.join(__dirname, "../Client/build")));

// Root route
// app.get("/", (req, res) => {
//   var index = path.join(__dirname, "../Client/build/index.html");
//   res.sendFile(index);
// });

// Redirect all requests to home page
app.get("*", (req, res) => {
  // var index = path.join(__dirname, "../Client/build/index.html");
  // res.sendFile(index);
  res.redirect("/");
});

// Run application
app.use(indexRoutes);
app.use(apiRoutes);

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
