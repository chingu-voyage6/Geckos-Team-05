import React from 'react';
import ReactDOM from 'react-dom';

let seed_gen = require("../utils/seed_gen.js");

class ArticleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }
  

 // callApi() {
 //   const response = await fetch('/api/hello');
 //   const body = await response.json();

 //   if (response.status !== 200) throw Error(body.message);

 //   return body;
 // };

  componentDidMount() {
   // this.callApi()
   fetch('/api/hello')
     .then(res => this.setState({ response: res.express }))
     .catch(err => console.log(err));
  }



  render() {
    console.log(this.state.response);
    console.log("what is in seed?");
    console.log(seed_gen);
    const sortedArticles = seed_gen.articles.sort((a, b) => (
      a.date - b.date
    ));

    let articleComponents = sortedArticles.map((item) => (
      <Articles 
          imageUrl = {item.imageUrl}
          headline = {item.headline}
          content = {item.content}
          linkUrl = {item.linkUrl}
          date = {item.date}
      />
    ));
    return (
      <div className = 'ui unstackable items'>
        {articleComponents}
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
      <div className='item'>
        <div className='image'>
          <img src={this.props.imageUrl}/>
        </div>
        <div className='info'>
           <h3 className="headline">{this.props.headline}</h3>
           <p className ="content">{this.props.content}</p>
           <a href={this.props.linkUrl}>Read More</a>
        </div>
      </div>
    );
  }
}



export default ArticleList;





