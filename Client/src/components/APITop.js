import React from 'react';
import ReactDOM from 'react-dom';

//TODO: create a share component to get the headlines articles


class Top extends React.Component {
	constructor () {
		super ();
		this.state = {
			array: [],
			topComponents: [],
			defaultImg: ('../../assets/updating.jpg')
		}

		// Create dev environment variables
		var nodeEnv = process.env.NODE_ENV || "production";
		if (nodeEnv === "development") {
			this.URLPrefix = "http://localhost:5000/";
		} else {
			this.URLPrefix = "https://the-new-news.herokuapp.com/";
		}
	}

	componentDidMount() {

	    fetch (`${this.URLPrefix}api/category/topheadlines`)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	// this is where the data JSON file is stored
		    	let array = data.data;

				// sort the array descending on the publish dates
				    array.sort(function (a, b) {
				      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
				    })

				// only use the first 3 articles to be displayed on the screen
			 	array = array.slice(0,3);
			 	let counter = 0;
			 	// console.log(array);
				let topComponents = array.map((val) => {
					//set counter to add class right or left to the top articles
					counter +=1;
					let sideClass = "left";
					if (counter === 1 || counter === 3){
						sideClass = "right";
					}
					if (val.urlToImage == null ) {
						return (
							<TopArticles
							  id = {val.source.id + val.publishedAt}
							  imageUrl = {this.state.defaultImg}
					          headline = {val.title}
					          content = {val.description}
					          linkUrl = {val.url}
					          date = {val.publishedAt}
					          position = {sideClass}
					   		/>
						)
					} else {
						return (
							<TopArticles
								  id = {val.source.id + val.publishedAt}
								  imageUrl = {val.urlToImage}
						          headline = {val.title}
						          content = {val.description}
						          linkUrl = {val.url}
						          date = {val.publishedAt}
						          position = {sideClass}
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

class TopArticles extends React.Component {
	constructor(props){
	    super(props);
	 }

	render() {
	    return (
	        <div className={['clearfix', this.props.position].join(' ') }>
	          <div className='image'>
	            <img src={this.props.imageUrl} className={["image-fit", "image-style"].join(' ')}/>
	          </div>
	          <div className='info'>
	             <h3 className="headline">{this.props.headline}</h3>
	             <p className ="content">{this.props.content}</p>
	             <a className="button" href={this.props.linkUrl}>Read More</a>
	          </div>
	        </div>
	    );
	}
}



export default Top;
