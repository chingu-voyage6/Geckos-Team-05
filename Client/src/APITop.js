import React from 'react';
import ReactDOM from 'react-dom';



class ArticleData extends React.Component {
	constructor () {
		super ();
		this.state = {
			articlesArray: [],
			titles: []
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

				let titles = articlesArray.map((val) => {
					return (
							<div key={val.source.id + val.title}>
								<h3> {val.title} </h3>
							</div>
					)
				})	
			this.setState({titles: titles});
			console.log("state", this.state.titles);			
			})
			
	}

	render (){
		return (
	      <div className="container2">
	      	<div className="container1">
	      		{this.state.titles}
	      	</div>
	      </div>
	    );
	}
}



export default ArticleData;