import React from 'react';
import date_utils from '../utils/date_utils';



class PopUpArticles extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			arr: [],
			defaultImg: ('../../assets/updating.jpg')

		}

		// Create dev environment variables
		var nodeEnv = process.env.NODE_ENV || "development";
		if (nodeEnv === "development") {
			this.URLPrefix = "http://localhost:5000/";
		} else {
			this.URLPrefix = "";
		}
	}

	render() {
			 	let arr = this.props.resultArticles;

			 	arr = arr.slice(0,6);
				let PopUpComponents = arr.map((val) => {

					if (val.urlToImage == null ) {
						return (
							<SearchedResults
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
							<SearchedResults
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
			return (
		     <div className ="searched-articles">
		     	<div className="timeline">
		        	{PopUpComponents}
		        </div>
		      </div>
		    );
	}
}

class SearchedResults extends React.Component {
  constructor(props){
    super(props);
 }
  render() {
    return (
      	<div className = "popup-content" key={this.props.id}>
	          <div className='popup-info'>
	          	  <div className = "date">
		      	  	  {this.props.date}
		      	  </div>
	             <h5 className="popup-headline">{this.props.headline}</h5>
	             <p className ="popup-p">{this.props.content}</p>
	             <a href={this.props.linkUrl}>Read More</a>
	          </div>
	          <div className='popup-image'>
	            <img src={this.props.imageUrl} className='image-fit'/>
	          </div>
	    </div>
    );
  }
}



export default PopUpArticles;
