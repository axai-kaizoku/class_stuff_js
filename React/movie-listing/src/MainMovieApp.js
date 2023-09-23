import React from 'react';
import { Route, Routes, Link, useMatch, Outlet } from 'react-router-dom';
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
			<Outlet />
			<Routes>
				<Route
					path={`${path}/action`}
					element={<ActionGenre />}
				/>
				<Route
					path={`${path}/comedy`}
					element={<ComedyGenre />}
				/>
			</Routes>
		</div>
	);
};

export default MainMovieApp;
