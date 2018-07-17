import React from 'react';


class SearchBox extends React.Component {
	constructor (props) {
		super (props);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.searchToggle = this.searchToggle.bind(this);

	}


	// To handle change from user input and call the parent (which is SearchPanel.js)
	handleChange(event) {
		// this.setState({input: event.target.value})
		this.props.onChange(event);
	}

	// To handle enter when user searches for a keyword and hit ENTER
	handleKeyPress (event) {
		if (event.key == 'Enter'){
			console.log('Pressed enter');
			this.props.onChange(event);

		}
	}

	searchToggle(event){
	    var container = $('.search-wrapper');
	    // TODO
	    // should have an extra check to see which container to add/remove class
	    
	    if(!container.hasClass('active')){
	        container.addClass('active');
	        event.preventDefault();
	    }
	    else if(container.hasClass('active')){
	        container.removeClass('active');
	        // clear input
	        container.find('.search-input').val('');
	    }
	}

	render() {
		return (
			<div className="search-wrapper">
				<div className="input-holder">
					<input type="text" className="search-input" placeholder="Type to search" value={this.props.input} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
					<button className="search-icon" onClick={this.searchToggle}><span></span></button>
				</div>
	    		<span className="close" onClick={this.searchToggle}></span>
			</div>
		)		
	}
}


export default SearchBox;

