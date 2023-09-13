import React from 'react';
import Input from './Components/Input';

class App extends React.Component {
	render() {
		return (
			<>
				<div className="app-container">
					<Input render={(value) => <h2>{value}</h2>} />
					<Input
						type="number"
						render={(value) => <p>{value * 2}</p>}
					/>
					<Input
						render={(value) => (
							<p style={{ color: 'red' }}>{value.toUpperCase()}</p>
						)}
					/>
				</div>
			</>
		);
	}
}

export default App;
