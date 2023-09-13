import React from 'react';

class Input extends React.Component {
	state = {
		userInput: '',
	};
	render() {
		return (
			<>
				<div className="Input-container">
					<h1>Input</h1>
					<input
						type={this.props.type}
						onChange={(e) => {
							this.setState({ userInput: e.target.value });
						}}
					/>
					<br />
					{this.props.render(this.state.userInput)}
				</div>
				<br />
			</>
		);
	}
}

export default Input;
