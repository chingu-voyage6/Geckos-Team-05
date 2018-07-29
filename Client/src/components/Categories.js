import React from 'react';

class Categories extends React.Component {
	// constructor() {
	// }

	render () {
		// new syntax to define this.props
		const {chooseCategory} = this.props;

		return (
			<ul className="categories">
				<li className="nav-item"><a href="#" onClick = {this.props.chooseCategory}>TOP LIVE</a></li>
				<li className="nav-item"><a href="#" onClick = {this.props.chooseCategory}>BUSINESS</a></li>
			    <li className="nav-item"><a href="#" onClick = {this.props.chooseCategory}>SPORTS</a></li>
			    <li className="nav-item"><a href="#" onClick = {this.props.chooseCategory}>TECHNOLOGY</a></li>
			    <li className="nav-item"><a href="#" onClick = {this.props.chooseCategory}>HEALTH</a></li>
			</ul>
		)
	}
}

export default Categories; 