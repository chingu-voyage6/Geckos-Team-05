import React from 'react';
import ReactDOM from 'react-dom';

let seed_gen = require("./seed_gen.js");
let bottom_articles


class BottomArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.bottom_articles = [];
  }
  
  render() {
    const sortedArticles = seed_gen.articles.sort((a, b) => (
      a.date - b.date
    ));

    // loop through sortedArticles and push the rest articles in bottom_articles array
    for (let i=3; i<sortedArticles.length; i++){
      this.bottom_articles.push(sortedArticles[i]);
    }

    let bottomArticleComponents = this.bottom_articles.map((val) => (
      <Articles 
          id = {val.id}
          imageUrl = {val.imageUrl}
          headline = {val.headline}
          content = {val.content}
          linkUrl = {val.linkUrl}
          date = {val.date}
      />
    ));
    return (
      <div className ="container-bottom-articles">
        {bottomArticleComponents}
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
      <div className='box'>
        <div className={this.props.id}>
          <div className='bottom-image'>
            <img src={this.props.imageUrl}/>
          </div>
          <div className='bottom-info'>
             <h5 className="bottom-headline">{this.props.headline}</h5>
             <p className ="bottom-content">{this.props.content}</p>
             <a href={this.props.linkUrl}>Read More</a>
          </div>
        </div>
      </div>
    );
  }
}



export default BottomArticleList;





