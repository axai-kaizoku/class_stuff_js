import React from 'react';
import { Route, Routes, Link, useMatch } from 'react-router-dom';
import ActionGenre from './Components/ActionGenre';
import ComedyGenre from './Components/ComedyGenre';

const MainMovieApp = () => {
	let { path, url } = useMatch();

	return (
		<div>
			<nav>
				<Link to={`${url}/action`}>Action</Link>
				<Link to={`${url}/comedy`}>Comedy</Link>
			</nav>
			<Routes>
				<Route
					path={`${path}/action`}
					component={ActionGenre}
				/>
				<Route
					path={`${path}/comedy`}
					component={ComedyGenre}
				/>
			</Routes>
		</div>
	);
};

export default MainMovieApp;
