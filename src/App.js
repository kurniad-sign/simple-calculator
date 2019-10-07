import React, { Component } from 'react';

import DisplayValue from './Components/DisplayValue';
import NumPad from './Components/NumPad';

import calculateState from './logic/calculateState';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			total: null,
			nextNum: null,
			operator: null
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(number) {
		this.setState(calculateState(this.state, number));
	}

	render() {
		return (
			<div className="container">
				<DisplayValue value={this.state.nextNum || this.state.total || '0'} />
				<NumPad onClick={this.handleClick} />
			</div>
		);
	}
}
