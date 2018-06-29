var mongoose = require("mongoose");

// Test Schema & Model Setup
  var testItemSchema = new mongoose.Schema({
    source: Object,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String
  });

  module.exports = mongoose.model("TestItem", testItemSchema);
