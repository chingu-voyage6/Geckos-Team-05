import React from 'react';
import TopArticles from "./APITop.js";
import BottomArticles from "./APIBottom.js";
import SearchPanel from "./SearchPanel.js";
import ChosenCategoryResults from "./ChosenCategoryResults.js";



class App extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			resultsCategory : [],
			chosenCategory: undefined
		}
		this.chooseCategory = this.chooseCategory.bind(this);

		// Create dev environment variables
		var nodeEnv = process.env.NODE_ENV || "development";
		if (nodeEnv === "development") {
			this.URLPrefix = "http://localhost:5000/";
		} else {
			this.URLPrefix = "";
		}

	}

	chooseCategory (e) {

		let input = e.target.innerHTML.toLowerCase();
		this.setState ({chosenCategory: input});

		this.fetchCategoryAPI (input);
	}

	fetchCategoryAPI (input) {
		
		// console.log(this.props.chosenCategory.toLowerCase());
		fetch (`${this.URLPrefix}api/category/${input}`)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	// this is where the data JSON file is stored
		    	let resultsCategory = data.data;
		    	this.setState({resultsCategory: resultsCategory});
		    });
	}

	render (){
		return (
			<div>
				<header>
					<h1 className="logo"></h1>
					<SearchPanel 
						chooseCategory = {this.chooseCategory}
					/>	
				</header>
				{(this.state.chosenCategory && this.state.chosenCategory!=="top live")? <ChosenCategoryResults resultsCategory = {this.state.resultsCategory}/> : 
					(<div>
						<div id="top-articles">
							<TopArticles /> 
						</div>

						<div id="bottom-articles">
							<BottomArticles />
						</div>	
					</div>
					)
				}		
			</div>
		)
	}
	
}

export default App;