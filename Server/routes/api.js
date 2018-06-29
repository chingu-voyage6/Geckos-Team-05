const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
newsapi.v2.topHeadlines({
    category:"business",
  pageSize:9
}).then(response => {
    console.log(response);
  //module.exports = response;
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});