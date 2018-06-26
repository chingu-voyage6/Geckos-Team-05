// TEMPORARY DATABASE TEST -- DELETE WHEN DATABASE IS LINKED TO API

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var TestItem = require("../models/test");

// Delete existing data before seeding
TestItem.collection.drop();

var george = new TestItem({
  name: "george",
  age: 47
});
var sam = new TestItem({
  name: "sam",
  age: 27
});
var michael = new TestItem({
  name: "michael",
  age: 23
});

george.save()
  .then(michael.save())
  .then(sam.save())
  .then(() => console.log("DATABASE IS LINKED & SAVING DATA!"));

  module.exports = router;
