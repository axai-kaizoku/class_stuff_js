import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainMovieApp from './MainMovieApp';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					render={() => <h1>Welcome to Movie App</h1>}
					component={MainMovieApp}
				/>
				<Route
					path="/genres"
					component={MainMovieApp}
				/>
			</Routes>
		</Router>
	);
}

export default App;
