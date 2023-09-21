import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Projects from './pages/Projects/Projects';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/projects"
				element={<Projects />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
		</>,
	),
);
