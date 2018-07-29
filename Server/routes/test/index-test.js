var express = require("express");
var testRouter = express.Router();
var APIData = require("./test-api-data.js");

//Use this module to write test API calls that dont directly interact with the API or the Database
testRouter.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

// testRouter.get("/api/getByKeyword", (req, res) => {
//   console.log("Request recieved to getByKeyword");
//   console.log(req);
//   	// get data from test articlesByKeyword
//   	// let foundData = articlesByKeyword[res.data];
// 	res.send({'resp': articlesByKeyword['monkey']});
// 	// console.log(foundData);
 
// });

testRouter.get("/api/getArticlesByKeywords", (req, res) => {
  let foundRes = APIData.articlesByKeywords[req.query.keyword];  
  console.log("Incoming to getArticlesByKeywords is:");
  console.log(req.query);
  res.send({data: {articles : [foundRes]}});
});
module.exports = testRouter;
