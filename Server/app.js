var express = require("express");
var app = express();
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

// Run application
app.use(indexRoutes);
app.use(apiRoutes);

app.use(function(req, res) {
  res.render("404");
});

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
