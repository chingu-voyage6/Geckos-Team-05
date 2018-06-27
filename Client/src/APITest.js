import React from 'react';
import ReactDOM from 'react-dom';



class ArticleData extends React.Component {
	constructor () {
		super ();
		this.state = {
			articlesArray: [],
			titles: []
			// id: [],
			// headline: [],
			// content: [],
			// linkUrl: [],
			// top_articles: [],
			// topArticleComponents: []

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
				let articlesArray = data.articles;
				console.log(articlesArray);

				// sort the aritcles from current pulished date to the oldest
				// const sortedArticles = articlesArray.sort((a, b) => (
			 //    	a.publishedAt - b.publishedAt
			 //    ));

			    // loop through sortedArticles and push the top 3 articles in the sortedArray
			    // for (let i=0; i<3; i++){
			    // 	top_articles.push(sortedArticles[i]);
			    // }

			    // let topArticleComponents = articlesArray.map((item) => (
			    //   <Articles 
			    //       id = {item.source.id + item.title}
			    //       imageUrl = {item.urlToImage}
			    //       headline = {item.title}
			    //       content = {item.description}
			    //       linkUrl = {item.url}
			    //   />
			    // ));
			    // this.setState({topArticleComponents: topArticleComponents})

			    // loop through sortedArticles and push the rest articles in the sortedArray
			    // for (let i=3; i<sortedArticles.length; i++){
			    // 	bottom_articles.push(sortedArticles[i]);
			    // }
				let titles = articlesArray.map((val) => {
					return (
							// <img src={pic.picture.medium} />
							<div key={val.source.id + val.title}>
								<h3> {val.title} </h3>
							</div>
					)
				})	
			this.setState(
				{titles: titles}
			// 	{id: item.source.id + item.title},
			// 	{imageUrl: item.urlToImage},
			// 	{headline: item.title},
			// 	{content: item.description},
			// 	{linkUrl: item.url}
			);
			// console.log("state", this.state.titles);			
			})
			
	}

	render (){
		return (
			<div>
				{this.state.titles}
	        	// {topArticleComponents}
				
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


export default ArticleData;