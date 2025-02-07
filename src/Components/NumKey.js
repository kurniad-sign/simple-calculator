import React, { Component } from 'react';

export default class NumKey extends Component {
	render() {
		return (
			<button
				className="btn"
				onClick={() => this.props.onClick(this.props.name)}
			>
				{this.props.name}
			</button>
		);
	}
}
