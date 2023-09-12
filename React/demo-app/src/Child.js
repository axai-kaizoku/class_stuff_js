import React from 'react';

class Child extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
			</div>
		);
	}
}

export default Child;
