import React from 'react';
import ReactDOM from 'react-dom';



class PopUp extends React.Component {
	constructor () {
		super ();
		this.state = {
			arr: [],
			PopUpComponents: [],
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

	componentDidMount () {
		fetch (`${this.URLPrefix}api/getLatestHeadlines`)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	// this is where the data JSON file is stored
		    	let arr = data.data;

				// sort the array descending on the publish dates
				    arr.sort(function (a, b) {
				      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
				    })

				// only use the first 3 articles to be displayed on the screen
			 	arr = arr.slice(3);
			 	console.log(arr);
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
			this.setState({PopUpComponents: PopUpComponents});
					
			})
			
	}

	render (){
		return (
	     <div className ="searched-articles">
	     	<div className="timeline">
	        	{this.state.PopUpComponents}
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



export default PopUp;