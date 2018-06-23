var express = require("express");
var app = express();
var mongoose = require("mongoose");

// Create dev environment variables
var nodeEnv = process.env.NODE_ENV || "development";
if (nodeEnv === "development") {
  require("dotenv").config()}

// Connect to database & all database models
mongoose.connect(process.env.MONGODB_URI);
var TestItem = require("./models/test");

// Require application routes
var indexRoutes = require("./routes/index");

// Handle front end content
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Run application
app.use(indexRoutes);
app.use(function(req, res) {
  res.render("404");
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App running on port " + port);
});



// TEMPORARY DATABASE TEST -- DELETE WHEN DATABASE IS LINKED TO API
var george = new TestItem({
  name: "george",
  age: 47
});
george.save().then(() => console.log("DATABASE IS LINKED & SAVING DATA!"));
