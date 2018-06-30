import React from 'react';
import ReactDOM from 'react-dom';




class ArticleData extends React.Component {
  constructor () {
    super ();
    this.state = {
      array: [],
      topComponents: [],
      defaultImg: ('../assets/updating.jpg')
      
    }
  }

  componentDidMount () {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&' + 
    'apiKey=dbd9c86c9a9140b38fcaa4c85bc4b689';


        // let req = new Request (url);

    fetch (url)
      .then(results => {
        return results.json();
      }).then(data => {
        // this is where the data JSON file is stored
        let array = data.articles;

        // sort the array descending on the publish dates
        for (let i=0; i<array.length; i++){
            array.sort(function (a, b) {
              return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
            })
        }

        // only use the first 3 articles to be displayed on the screen
        array = array.slice(0,3);
        console.log(array);
        let topComponents = array.map((val) => {
          if (val.urlToImage == null ) {
            return (
              <Articles 
                id = {val.source.id + val.publishedAt}
                imageUrl = {this.state.defaultImg}
                    headline = {val.title}
                    content = {val.description}
                    linkUrl = {val.url}
                    date = {val.publishedAt}
                />  
            )
          } else {
            return (
              <Articles 
                  id = {val.source.id + val.publishedAt}
                  imageUrl = {val.urlToImage}
                      
                      headline = {val.title}
                      content = {val.description}
                      linkUrl = {val.url}
                      date = {val.publishedAt}
                />              
            )
          }
        })  
      this.setState({topComponents: topComponents});
      })
  }

  render (){
    return (
        <div>
          {this.state.topComponents}
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
        <div key={this.props.id}>
          <div className='clearfix'>
            <div className='image'>
              <img src={this.props.imageUrl} width={300} height={200}/>
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



export default ArticleData;