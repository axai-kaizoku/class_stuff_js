import React from 'react';

class TimeClock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		this.timer = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick = () => {
		this.setState({
			date: new Date(),
		});
	};

	render() {
		return (
			<div className="time-clock">
				<h1>Clock</h1>
				<h1>{this.state.date.toLocaleTimeString()}</h1>
			</div>
		);
	}
}

export default TimeClock;
