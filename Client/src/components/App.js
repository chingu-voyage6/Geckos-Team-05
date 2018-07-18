import React from 'react';
import TopArticles from "./APITop.js";
import BottomArticles from "./APIBottom.js";
import SearchPanel from "./SearchPanel.js";
import ChosenCategoryResults from "./ChosenCategoryResults.js";



class App extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			chosenCategory: undefined
		}
		this.chooseCategory = this.chooseCategory.bind(this);
	}

	chooseCategory (e) {
		this.setState ({chosenCategory: e.target.innerHTML});
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
				{this.state.chosenCategory? <ChosenCategoryResults chosenCategory = {this.state.chosenCategory}/> : 
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