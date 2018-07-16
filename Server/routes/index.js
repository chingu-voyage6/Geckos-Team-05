var express = require("express");
var router = express.Router();
var news = require("../models/news");

router.use(function(req, res, next) {
	// TODO: update this to only add in the development mode
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

router.get("/api/category/:catName", (req, res) => {
  console.log("Request recieved to getLatestHeadlines");
  news.find({"category":req.params.catName})
  .then((data) => {
    res.send({data: data});
    console.log(data[0].category);
  })
  .catch((err) => {
    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
  });
});

module.exports = router;
