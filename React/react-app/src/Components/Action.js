import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const actionMovies = [
	{
		id: 1,
		film: 'Terminator',
	},
	{ id: 2, film: 'Fast and Furious: 6' },
];

export default function Action() {
	return (
		<header className="App-header">
			<h1>Action Films</h1>
			{actionMovies.map((film) => (
				<Link
					to={`/action/${film.id}`}
					style={{ color: 'white' }}>
					{film.film}
				</Link>
			))}
			<Outlet />
		</header>
	);
}
