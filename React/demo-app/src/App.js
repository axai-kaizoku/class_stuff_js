import React from 'react';
import UsersList from './UsersList';

class App extends React.Component {
	render() {
		return (
			<>
				<div className="app-container">
					<UsersList />
				</div>
			</>
		);
	}
}

export default App;
