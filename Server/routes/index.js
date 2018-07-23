var express = require("express");
var router = express.Router();
var news = require("../models/news");

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

router.use(function(req, res, next) {
	// TODO: update this to only add in the development mode
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

router.get("/api/category/:catName", (req, res) => {
  let catName = req.params.catName;
  console.log("Request recieved to get latest "+catName);
  news.find({"category":catName})
  .then((data) => {
    res.send({data: data});
    console.log("Response sent to get latest "+catName);
  })
  .catch((err) => {
    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
  });
});

router.get("/api/search/:query", (req, res) => {
  let query = req.params.query;
  console.log("Request recieved to get results for " + query);
  newsapi.v2.topHeadlines({
    q: query,
    pageSize: 9
  }).then(response => {
    let array = response.articles;
    res.send({data: array});
    console.log("Response sent to get results for " + query);
  })
  .catch((err) => {
    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
  });
});

module.exports = router;
