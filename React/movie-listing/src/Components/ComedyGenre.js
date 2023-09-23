import React from 'react';
import { Route, Link, useMatch, Outlet } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const ComedyGenre = () => {
	let { path, url } = useMatch();

	return (
		<div>
			<h1>Action Movies</h1>
			<ul>
				<li>
					<Link to={`${url}/movie/1`}>Movie 1</Link>
				</li>
				<li>
					<Link to={`${url}/movie/2`}>Movie 2</Link>
				</li>
			</ul>
			<Outlet />
			<Route
				path={`${path}/movie/:id`}
				element={<MovieDetails />}
			/>
		</div>
	);
};

export default ComedyGenre;
