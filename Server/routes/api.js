var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var news = require("../models/news");


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
const tagList = ["business","entertainment","general","health","science","sports","technology"];

var refresh = function(){
  newsapi.v2.topHeadlines({
  language: "en",
  pageSize:9
}).then(response => {
  if(response.status =="ok") {
    // Delete existing data before seeding
    news.collection.remove({"category":"topheadlines"});
    response.articles.forEach(function(article) {
      article["category"] = "topheadlines";
      var obj = new news(article);
      obj.save();
    });
  }
  else {
    console.log(response.message);
  }
});
}

var updateCategory = function(catName) {
  newsapi.v2.topHeadlines({
    category: catName,
    language: "en",
    pageSize:9
  }).then(response => {
    if(response.status =="ok") {
      // Delete existing data before seeding
      news.collection.remove({"category":catName});
      response.articles.forEach(function(article) {
        article["category"] = catName;
        var obj = new news(article);
        obj.save();
      });
    }
    else {
      console.log(response.message);
    }
  });
}

var refreshCategory = function() {
  tagList.forEach(function(catagory) {
    updateCategory(catagory);
  });
}

refresh();
setInterval(refresh, 900000);

refreshCategory();
setInterval(refreshCategory, 1800000)

module.exports = router;