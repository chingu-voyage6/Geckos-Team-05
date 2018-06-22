import React from 'react';
import ReactDOM from 'react-dom';
// var Seed = require('../Seed.js')

// var articles = Seed.articles;



// hardcoding the data here 
// try to firgue how to get access to data in Seed.js
const articles = [
    {
      imageUrl: "../assets/placeholder.jpg",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
      linkUrl: "http://kenh14.vn/",
      date: 3
    },

    {
      imageUrl: "../assets/placeholder.jpg",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
      linkUrl: "http://kenh14.vn/",
      date: 2
    },

    {
      imageUrl: "../assets/placeholder.jpg",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
      linkUrl: "http://kenh14.vn/",
      date: 1
    },

    {
      imageUrl: "../assets/placeholder.jpg",
      headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 4.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
      linkUrl: "http://kenh14.vn/",
      date: 4
    }
  ];

class ArticleList extends React.Component {
  render() {
    const sortedArticles = articles.sort((a, b) => (
      b.date - a.date
    ));
    const articleComponents = sortedArticles.map((item) => (
      <Articles 
          imageUrl = {item.imageUrl}
          headline = {item.headline}
          content = {item.content}
          linkUrl = {item.linkUrl}
          date = {item.date}
      />
    ));
    return (
      <div className='ui unstackable items'>
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





