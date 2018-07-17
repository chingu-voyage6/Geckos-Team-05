var express = require("express");
var router = express.Router();
var news = require("../models/news");


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
const tagList = ["business","entertainment","general","health","science","sports","technology"];

var refresh = function(){
  newsapi.v2.topHeadlines({
  country: "gb",
  pageSize:99
}).then(response => {
  var count = 0;
  // Delete existing data before seeding
  news.collection.remove({"category":"topheadlines"});
    if(count<9){
        response.articles.forEach(function(article) {
          article["category"] = "topheadlines";
          var obj = new news(article);
          obj.save();
          count++;
        });
      }
})
.catch((err) => {
  console.log(err);
});
}

var updateCategory = function(catName) {
  newsapi.v2.topHeadlines({
    category: catName,
    country: "gb",
    pageSize:99
  }).then(response => {
    // Delete existing data before seeding
    var count = 0;
    news.collection.remove({"category":catName});
    response.articles.forEach(function(article) {
      if(count<9){
        if(article.urlToImage&&article.description){
          article["category"] = catName;
          var obj = new news(article);
          obj.save();
          count++;
        }
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

var refreshCategory = function() {
  tagList.forEach(function(category) {
    updateCategory(category);
  });
}

refresh();
setInterval(refresh, 900000);

refreshCategory();
setInterval(refreshCategory, 1800000)

module.exports = router;