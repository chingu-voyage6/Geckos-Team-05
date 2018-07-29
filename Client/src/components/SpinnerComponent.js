import React from 'react';
import spinnerService from './spinner.service';

export class SpinnerComponent extends React.Component {
	constructor (props){
		super (props);

		this.state = {
	      show: this.props.hasOwnProperty('show') ? this.props.show : false
	    };

	    if (this.props.hasOwnProperty('spinnerService')) {
	      this.spinnerService = this.props.spinnerService;
	    } else {
	      this.spinnerService = spinnerService;
	    }

	    this.spinnerService._register(this);
	}

	componentWillUnmount() {
	    this.spinnerService._unregister(this);
	}

	get name() {
	    return this.props.name;
	}

	get group() {
	    return this.props.group;
	}

	get show() {
	    return this.state.show;
	}

	set show(show) {
	    this.setState({ show });
	}

	render () {
		const {loadingImage} = this.props;
		return (
			<div style={{ display: 'inline-block' }}>
		        <img src={loadingImage} />
		    </div>
		)
	}
}