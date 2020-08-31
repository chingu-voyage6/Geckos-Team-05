var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");

// Create dev environment variables
var nodeEnv = process.env.NODE_ENV || "development";
if (nodeEnv === "development") { require("dotenv").config() };

// Connect to database & all database models
if (nodeEnv === "production") {
  mongoose.connect(process.env.MONGODB_URI_ATLAS);
} else {
  mongoose.connect(process.env.MONGODB_URI);
};

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

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
