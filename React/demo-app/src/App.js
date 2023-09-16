import React from 'react';

class App extends React.Component {
	state = {
		isTimerRunning: false,
		timeElapsed: 0,
	};

	componentWillUnmount = () => {
		clearInterval(this.timeInterval);
	};

	onResetTimer = () => {
		clearInterval(this.timeInterval);
		this.setState({ isTimerRunning: false, timeElapsed: 0 });
	};

	onStopTimer = () => {
		clearInterval(this.timeInterval);
		this.setState({ isTimerRunning: false });
	};

	updateTime = () => {
		this.setState((prevState) => ({
			timeElapsed: prevState.timeElapsed + 1,
		}));
	};

	onStartTimer = () => {
		this.timeInterval = setInterval(this.updateTime, 1000);
		this.setState({ isTimerRunning: true });
	};

	renderSeconds = () => {
		const { timeElapsed } = this.state;
		const seconds = Math.floor(timeElapsed % 60);

		if (seconds < 10) {
			return `0${seconds}`;
		} else {
			return seconds;
		}
	};

	renderMinutes = () => {
		const { timeElapsed } = this.state;
		const minutes = Math.floor(timeElapsed / 60);

		if (minutes < 10) {
			return `0${minutes}`;
		} else {
			return minutes;
		}
	};

	render() {
		const time = `${this.renderMinutes()}:${this.renderSeconds()}`;
		return (
			<div className="bg-container">
				<div className="content-container">
					<h1 className="title">StopWatch</h1>
					<div className="stopwatch-con">
						<h1 className="stopwatch-time">{time}</h1>
						<div className="timer-buttons">
							<button
								className="start button"
								onClick={this.onStartTimer}
								disabled={this.state.isTimerRunning}>
								Start
							</button>
							<button
								className="stop button"
								onClick={this.onStopTimer}>
								Stop
							</button>
							<button
								className="reset button"
								onClick={this.onResetTimer}>
								Reset
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
