import { Component } from 'react';
import './index.css';

class Toggle extends Component {
	state = {
		status: true,
	};
	turnOnStatus = () => {
		//update the status to true
		this.setState({
			status: true,
		});
	};
	turnOffStatus = () => {
		//update the status to false
		this.setState({
			status: false,
		});
	};
	render() {
		const { status } = this.state;
		return (
			<div className="toggleCon">
				<h1>{status ? 'ON' : 'OFF'}</h1>
				<div className="buttons">
					<button onClick={this.turnOffStatus}>OFF</button>
					<button onClick={this.turnOnStatus}>ON</button>
				</div>
			</div>
		);
	}
}

export default Toggle;
