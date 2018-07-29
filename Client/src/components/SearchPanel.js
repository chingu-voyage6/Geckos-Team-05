import React from 'react';
import PopUpArticles from "./PopUpArticles.js";
import SearchBox from "./SearchBox.js";
import Categories from "./Categories.js";

import ChosenCategoryResults from "./ChosenCategoryResults.js";
import TopArticles from "./APITop.js";
import BottomArticles from "./APIBottom.js";


class SearchPanel extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			// store input for SearchBox and Popup articles
			inputToSearchBox : "",
			inputToPopUp: "",
			resultArticles: [],
			isLoading: false,

			// store input for Category functionality
			resultsCategory : [],
			chosenCategory: undefined
		};

		this.onChange = this.onChange.bind(this);
		this.onPopUpClose = this.onPopUpClose.bind(this);

		this.chooseCategory = this.chooseCategory.bind(this);

		// Create dev environment variables
		var nodeEnv = process.env.NODE_ENV || "development";
		if (nodeEnv === "development") {
			this.URLPrefix = "http://localhost:5000/";
		} else {
			this.URLPrefix = "";
		}
	}

	// onChange Handler will pass into and update the search box
	//  onChange Hadler will ONLY pass into Popup page if user press enter or click the search icon
	onChange (event) {

		let input = event.target.value;
		this.setState({inputToSearchBox: input});
		console.log(`inputToSearchBox is:${input}`);

		if (event.which == 13){
			this.setState({inputToPopUp: input});
			console.log(`inputToPopUp: ${input}`)
			$("#overlay").css("display", "inline-block");
	        $(".search-wrapper").removeClass("active");
	        $(".search-input").append("Type to search");

	        this.fetchKeywordAPI(input);
		}
	}

	onPopUpClose (event) {
		// closePopup.onclick = function() {
			overlay.style.display = 'none';
			popup.style.display = 'none';
   		// };
	}

	fetchKeywordAPI (input) {
		fetch (`${this.URLPrefix}api/search/${input}`)
		// fetch (`${this.URLPrefix}api/getArticlesByKeywords?keyword=${this.state.inputToPopUp}`)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	// this is where the data JSON file is stored
		    	let arr = data.data;
		    	this.setState({resultArticles: arr});
		    });
	}

	// CATEGORIES HANDLE FUCNTIONS

	chooseCategory (e) {

		let input = e.target.innerHTML.toLowerCase();
		this.setState ({chosenCategory: input});

		this.fetchCategoryAPI (input);
	}

	fetchCategoryAPI (input) {
		this.setState({ isLoading: true })

		// console.log(this.props.chosenCategory.toLowerCase());
		fetch (`${this.URLPrefix}api/category/${input}`)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	// this is where the data JSON file is stored
		    	let resultsCategory = data.data;
		    	this.setState({ 
		    		resultsCategory: resultsCategory, 
		    		isLoading: false
		    	});
		    });
	}

	// loadingTheIcon () {
	// 	const icon = document.getElementsByClassName("loading-icon"); 
	// 	this.state.isLoading
	// 		? icon.style.visibility = "visible"
	// 		: 
	// 	}

	// RENDERING 

	render (){
		return (
		  <div>
			<header>
				<h1 className="logo"></h1>
				<div className="nav-bar">
					<Categories 
						chooseCategory = {this.chooseCategory} />		
					<SearchBox 
						input={this.state.inputToSearchBox}
						onChange={this.onChange}
					/>
					<div id="overlay">
						<div className="popup">
							<div className="popupcontrols">
								<span className="popupclose" onClick = {this.onPopUpClose}>X</span>
							</div>
							<div className="popupcontent">
								<PopUpArticles 
									resultArticles={this.state.resultArticles}
								/>
							</div>
						</div>
					</div>			
				</div>
			</header>

			<div className = "loading-icon"></div>
			
			{ this.state.isLoading
				? (<p>loading</p>)
				: ((this.state.chosenCategory && this.state.chosenCategory!=="top live")
					?  <ChosenCategoryResults resultsCategory = {this.state.resultsCategory}> </ChosenCategoryResults>
					: (<div>
							<div id="top-articles">
								<TopArticles /> 
							</div>

							<div id="bottom-articles">
								<BottomArticles />
							</div>	
				   	   </div>
				   	 )

				)
			}

		  </div>		
		)
	}	
}

export default SearchPanel;






