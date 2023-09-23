import React from 'react';
import { Route, Link, useMatch } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const ActionGenre = () => {
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
			<Route
				path={`${path}/movie/:id`}
				component={MovieDetails}
			/>
		</div>
	);
};

export default ActionGenre;
