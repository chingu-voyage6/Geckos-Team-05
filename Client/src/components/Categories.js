import React from 'react';

class Categories extends React.Component {
	// constructor() {
	// }

	render () {
		// new syntax to define this.props
		const {chooseCategory} = this.props;
		return (
			<ul className="categories">
				<li className="nav-item" onClick = {this.props.chooseCategory}><a href="#" >LIVE</a></li>
				<li className="nav-item" onClick = {this.props.chooseCategory}><a href="#">BUSINESS</a></li>
			    <li className="nav-item" onClick = {this.props.chooseCategory}><a href="#" >TECH</a></li>
			    <li className="nav-item" onClick = {this.props.chooseCategory}><a href="#" >LIFESTYLE</a></li>
			</ul>
		)
	}
}

export default Categories;