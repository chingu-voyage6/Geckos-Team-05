import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
	constructor () {
		super ();
		this.state = {
			input : ''
		};
		this.handleChange = this.handleChange.bind(this)
		this.searchToggle = this.searchToggle.bind(this);
	}

	handleChange(event) {
		this.setState({input: event.target.value})
	}

	searchToggle(evt){
	    var container = $('.search-wrapper');
	    
	    if(!container.hasClass('active')){
	        container.addClass('active');
	        evt.preventDefault();
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
					<input type="text" className="search-input" placeHolder="Type to search" value={this.state.input} onChange={this.handleChange}/>
					<button className="search-icon" onClick={this.searchToggle}><span></span></button>
				</div>
	    		<span className="close" onClick={this.searchToggle}></span>
			</div>
		)		
	}
}


export default SearchBox;

