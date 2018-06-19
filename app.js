var express = require("express");
var app = express();

// Require Routes
var indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Run application
app.use(indexRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App running on port " + port);
});
