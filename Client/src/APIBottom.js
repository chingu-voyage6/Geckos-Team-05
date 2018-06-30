import React from 'react';
import ReactDOM from 'react-dom';



class Bottom extends React.Component {
	constructor () {
		super ();
		this.state = {
			arr: [],
			bottomComponents: []
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
				let arr = data.articles;

				// sort the array descending on the publish dates
				for (let i=0; i<arr.length; i++){
				    arr.sort(function (a, b) {
				      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
				    })
				}

				// only use the first 3 articles to be displayed on the screen
			 	arr = arr.slice(3);
			 	console.log(arr);
				let bottomComponents = arr.map((val) => {
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

class Articles extends React.Component {
  constructor(props){
    super(props);
 }
  render() {
    return (
      <div className='box'>
        <div key={this.props.id}>
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



export default Bottom;