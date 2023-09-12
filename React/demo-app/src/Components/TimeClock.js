import React from 'react';

class TimeClock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		setInterval(this.tick, 1000);
	}

	tick = () => {
		this.setState({
			date: new Date(),
		});
	};

	render() {
		return (
			<div className="time-clock">
				<h1>Time Clock</h1>
				<h1>{this.state.date.toLocaleTimeString()}</h1>
			</div>
		);
	}
}

export default TimeClock;
