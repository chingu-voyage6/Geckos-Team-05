import React from 'react';
import ReactDOM from 'react-dom';



class Bottom extends React.Component {
	constructor () {
		super ();
		this.state = {
			arr: [],
			bottomComponents: [],
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

	componentDidMount () {
		fetch (`${this.URLPrefix}api/category/topheadlines`)
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
				let bottomComponents = arr.map((val) => {
					if (val.urlToImage == null ) {
						return (
							<BottomArticles
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
							<BottomArticles
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
			this.setState({bottomComponents: bottomComponents});

			})

	}

	render (){
		return (
	     <div className ="container-bottom-articles">
	        {this.state.bottomComponents}
	      </div>
	    );
	}
}

class BottomArticles extends React.Component {
  constructor(props){
    super(props);
 }
  render() {
    return (
      <div className='box'>
        <div key={this.props.id}>
          <div className='bottom-image'>
            <img src={this.props.imageUrl} width={280} height={180}/>
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



export default Bottom;
