import React from 'react';
import Header from './Components/Header';
import InstaPosts from './Components/InstaPosts';

class App extends React.Component {
	render() {
		return (
			<>
				<div className="app-container">
					<Header />
					<InstaPosts />
				</div>
			</>
		);
	}
}

export default App;
