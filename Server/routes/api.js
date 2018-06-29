var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var TestItem = require("../models/test");


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

var refresh = function(){
  // Delete existing data before seeding
  TestItem.collection.drop();
  newsapi.v2.topHeadlines({
  country:"gb",
  pageSize:9
}).then(response => {
  response.articles.forEach(function(article) {
    var obj = new TestItem(article);
    obj.save();
  });
});
}
refresh();
setInterval(refresh, 900000);

module.exports = router;