import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
	return (
		<header className="App-header">
			<h1>Home Page</h1>
			<Link
				style={{ color: 'white' }}
				to="/action">
				Action Films
			</Link>
			<Link
				style={{ color: 'white' }}
				to="/comedy">
				Comedy Films
			</Link>
			<Outlet />
		</header>
	);
}
