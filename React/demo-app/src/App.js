import React from 'react';
import TimeClock from './Components/TimeClock';

class App extends React.Component {
	state = {
		showClock: true,
	};

	render() {
		return (
			<>
				<button
					onClick={() => {
						this.setState({ showClock: !this.state.showClock });
					}}>
					{this.state.showClock ? 'Hide Clock' : 'Show Clock'}
				</button>
				<div className="container">{this.state.showClock && <TimeClock />}</div>
			</>
		);
	}
}

export default App;
