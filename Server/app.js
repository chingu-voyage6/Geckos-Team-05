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
// app.use(express.static("../Client/build"));
app.use(express.static(path.join(__dirname, "../Client/build")));

// app.get("/", (req, res) => {
//   var file = path.join(__dirname, "../Client/build/index.html");
//   res.sendFile(file);
//   console.log(file);
// });

// Run application
app.use(indexRoutes);
app.use(apiRoutes);


//Test rotuer
// var testIndexRoutes = require("./routes/test/index-test");
// app.use(testIndexRoutes);

//Require database test
// var dbTest = require("./routes/db-test");
// app.use(dbTest);


app.use(function(req, res) {
  res.render("404");
});

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
