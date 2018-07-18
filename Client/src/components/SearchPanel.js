import React from 'react';
import PopUpArticles from "./PopUpArticles.js";
import SearchBox from "./SearchBox.js";
import Categories from "./Categories.js";


class SearchPanel extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			inputToSearchBox : "",
			inputToPopUp: "",
			resultArticles: []
		};

		this.onChange = this.onChange.bind(this);
		this.onPopUpClose = this.onPopUpClose.bind(this);
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
		fetch (`${this.URLPrefix}api/getArticlesByKeywords?keyword=${input}`)
		// fetch (`${this.URLPrefix}api/getArticlesByKeywords?keyword=${this.state.inputToPopUp}`)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	// this is where the data JSON file is stored
		    	let arr = data.data;
		    	this.setState({resultArticles: arr.articles});
		    });
	}

	render (){
		return (
			<div className="nav-bar">
				<Categories 
					chooseCategory = {this.props.chooseCategory} />		
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
		)
	}	
}

export default SearchPanel;

