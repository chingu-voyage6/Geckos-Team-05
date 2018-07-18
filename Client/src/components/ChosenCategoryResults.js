import React from 'react';

class ChosenCategoryResults extends React.Component {
	constructor (props){
		super (props);
		
	}

	

	render () {
		return (
			<h1>{this.props.chosenCategory}</h1>
		)
	}

}

export default ChosenCategoryResults;