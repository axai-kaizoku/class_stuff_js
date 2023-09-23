import React from 'react';
import { Link } from 'react-router-dom';

export default function Anime() {
	return (
		<div className="content">
			<h1>This is Anime Genre</h1>
			<ul>
				<Link to="/anime/:id">
					<li>Your Name</li>
				</Link>
				<Link to="/anime/:id">
					<li>5cm per second</li>
				</Link>
				<Link to="/anime/:id">
					<li>Spirited Away</li>
				</Link>
				<Link to="/anime/:id">
					<li>Suzume</li>
				</Link>
			</ul>
		</div>
	);
}
