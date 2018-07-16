var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var news = require("../models/news");


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

var refresh = function(){
  // Delete existing data before seeding
  news.collection.drop();
  newsapi.v2.topHeadlines({
  country:"gb",
  pageSize:9
}).then(response => {
  response.articles.forEach(function(article) {
    article["category"] = "topheadlines";
    var obj = new news(article);
    obj.save();
  });
});
}
refresh();
setInterval(refresh, 900000);

module.exports = router;