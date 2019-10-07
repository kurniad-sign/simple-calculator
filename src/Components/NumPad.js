import React, { Component } from 'react';

import NumKey from './NumKey';

export default class Numpad extends Component {
	render() {
		return (
			<div className="numpad">
				<div>
					<NumKey name="AC" onClick={name => this.props.onClick(name)} />
					<NumKey name="%" onClick={name => this.props.onClick(name)} />
					<NumKey name="/" onClick={name => this.props.onClick(name)} />
				</div>
				<div>
					<NumKey name="7" onClick={name => this.props.onClick(name)} />
					<NumKey name="8" onClick={name => this.props.onClick(name)} />
					<NumKey name="9" onClick={name => this.props.onClick(name)} />
					<NumKey name="*" onClick={name => this.props.onClick(name)} />
				</div>
				<div>
					<NumKey name="4" onClick={name => this.props.onClick(name)} />
					<NumKey name="5" onClick={name => this.props.onClick(name)} />
					<NumKey name="6" onClick={name => this.props.onClick(name)} />
					<NumKey name="-" onClick={name => this.props.onClick(name)} />
				</div>
				<div>
					<NumKey name="1" onClick={name => this.props.onClick(name)} />
					<NumKey name="2" onClick={name => this.props.onClick(name)} />
					<NumKey name="3" onClick={name => this.props.onClick(name)} />
					<NumKey name="+" onClick={name => this.props.onClick(name)} />
				</div>
				<div>
					<NumKey name="0" onClick={name => this.props.onClick(name)} />
					<NumKey name="=" onClick={name => this.props.onClick(name)} />
				</div>
			</div>
		);
	}
}
