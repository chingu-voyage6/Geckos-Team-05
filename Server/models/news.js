var mongoose = require("mongoose");

// Test Schema & Model Setup
  var newsSchema = new mongoose.Schema({
    category: String,
    source: Object,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String
  });

  module.exports = mongoose.model("news", newsSchema);
