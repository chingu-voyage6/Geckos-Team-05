import React from 'react';

class ChosenCategoryResults extends React.Component {
	constructor (props){
		super (props);
		this.state = {
			array: []
			// chosenCategory: []
		}

		// Create dev environment variables
		var nodeEnv = process.env.NODE_ENV || "development";
		if (nodeEnv === "development") {
			this.URLPrefix = "http://localhost:5000/";
		} else {
			this.URLPrefix = "";
		}
	}


	render () {
				let array = this.props.resultsCategory;
				let CategoryComponents = array.map((val) => {
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
		        	{CategoryComponents}
		        </div>
		    </div>
		)
	}

}

class SearchedResults extends React.Component {
  constructor(props){
    super(props);
 }
  render() {
    return (
      	<div className = "container-right">
      	  <div className = "popup-content" key={this.props.id}>
	          <div className='popup-info'>
	             <h5 className="popup-headline">{this.props.headline}</h5>
	             <p className ="popup-content">{this.props.content}</p>
	             <a href={this.props.linkUrl}>Read More</a>
	          </div>
	          <div className='popup-image'>
	            <img src={this.props.imageUrl} width={370} height={240}/>
	          </div>	  
	      </div>
	    </div>
    );
  }
}

export default ChosenCategoryResults;