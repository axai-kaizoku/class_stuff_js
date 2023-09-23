import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
	return (
		<div className="content">
			<h1>Main Layout component</h1>
			<ul>
				{/* <Link to="/">
					<li>Home</li>
				</Link> */}
				<Link to="/action">
					<li>Action</li>
				</Link>
				<Link to="/comedy">
					<li>Comedy</li>
				</Link>
				<Link to="/scifi">
					<li>Scifi</li>
				</Link>
				<Link to="/thriller">
					<li>Thriller</li>
				</Link>
				<Link to="/anime">
					<li>Anime</li>
				</Link>
			</ul>
		</div>
	);
}
