import React from 'react';
import { Link } from 'react-router-dom';

export default function Thriller() {
	return (
		<Link to="/thriller">
			<div className="content">
				<h1>This is Thriller Genre</h1>
				<ul>
					<Link to="/thriller/:id">
						<li>Micheal Jackson: Thriller</li>
					</Link>
					<Link to="/thriller/:id">
						<li>Jawan</li>
					</Link>
					<Link to="/thriller/:id">
						<li>Tenet</li>
					</Link>
					<Link to="/thriller/:id">
						<li>Inception</li>
					</Link>
				</ul>
			</div>
		</Link>
	);
}
