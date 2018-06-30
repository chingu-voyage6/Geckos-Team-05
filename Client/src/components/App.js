import React from 'react';
import ReactDOM from 'react-dom';

let seed_gen = require("./seed_gen.js");
let top_articles
let bottom_articles

class TopArticleList extends React.Component {

  constructor(props) {
    super(props);
    this.top_articles = [];
    // this.state = {
    //   response: ''
    // };
  }
  

 // callApi() {
 //   const response = await fetch('/api/hello');
 //   const body = await response.json();

 //   if (response.status !== 200) throw Error(body.message);

 //   return body;
 // };

  // componentDidMount() {
  //  // this.callApi()
  //  fetch('/api/hello')
  //    .then(res => this.setState({ response: res.express }))
  //    .catch(err => console.log(err));
  // }

  render() {
    const sortedArticles = seed_gen.articles.sort((a, b) => (
      a.date - b.date
    ));

    // loop through sortedArticles and push the top 3 articles in top_articles array
    for (let i=0; i<3; i++){
      this.top_articles.push(sortedArticles[i]);
    }

    let topArticleComponents = this.top_articles.map((item) => (
      <Articles 
          id = {item.id}
          imageUrl = {item.imageUrl}
          headline = {item.headline}
          content = {item.content}
          linkUrl = {item.linkUrl}
          date = {item.date}
      />
    ));
    return (
      <div>
        {topArticleComponents}
      </div>
    );
  }
}


class Articles extends React.Component {
  constructor(props){
    super(props);
 }
  render() {
    return (
      <div className={this.props.id}>
        <div className='clearfix'>
          <div className='image'>
            <img src={this.props.imageUrl}/>
          </div>
          <div className='info'>
             <h3 className="headline">{this.props.headline}</h3>
             <p className ="content">{this.props.content}</p>
             <a href={this.props.linkUrl}>Read More</a>
          </div>
        </div>
      </div>
    );
  }
}


export default TopArticleList;


 // <div className="container2">
        //  <div className="container1">
        //    {this.state.titles}
        //  </div>
        // </div>
