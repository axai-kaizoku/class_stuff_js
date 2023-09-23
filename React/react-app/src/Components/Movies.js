import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Action from './Action';

export default function Movies() {
	return (
		<>
			{/* <Link to="/movies"> */}
			<div>
				<h1>Movies</h1>
			</div>
			<div>
				<Link to="/movies/action">
					<h2>Action</h2>
				</Link>
				<Link to="/movies/comedy">
					<h2>Comedy</h2>
				</Link>
			</div>
			<Routes>
				<Route
					path="/movies/action"
					element={<Action />}
				/>
			</Routes>
			{/* </Link> */}
			<Outlet />
		</>
	);
}
