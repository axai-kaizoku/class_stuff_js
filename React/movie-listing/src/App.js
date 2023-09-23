import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainMovieApp from './MainMovieApp';

function App() {
	return (
		<Router>
			<Link to="/">MainMovieApp</Link>
			<Routes>
				<Route
					path="/"
					// render={() => <h1>Welcome to Movie App</h1>}
					element={<MainMovieApp />}
				/>
				{/* <Route
					path="/genres"
					element={<MainMovieApp />}
				/> */}
			</Routes>
		</Router>
	);
}

export default App;
