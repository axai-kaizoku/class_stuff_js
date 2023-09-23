import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
	return (
		// <Link to="/">
		<>
			<div>
				<h1>Welcome to Movies-listing site</h1>
			</div>
			<Link to="/movies">Movies</Link>
			<Outlet />
		</>
		// </Link>
	);
}
