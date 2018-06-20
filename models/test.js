var mongoose = require("mongoose");

// Test Schema & Model Setup
  var testItemSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  module.exports = mongoose.model("TestItem", testItemSchema);
