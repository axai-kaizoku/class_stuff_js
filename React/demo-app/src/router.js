import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Projects from './pages/Projects/Projects';
import Logout from './components/Logout';
import { AuthenticationService } from './utils/authService';
import { getAllProjects, getProject } from './pages/Projects/projectsLoader';
import ProjectDetails from './pages/Projects/ProjectDetails';
import Protected from './components/Protected';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<AuthenticationService />}>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route element={<Protected />}>
				<Route
					path="/projects"
					element={<Projects />}
					loader={getAllProjects}>
					<Route
						path=":projectId"
						element={<ProjectDetails />}
						loader={getProject}
					/>
				</Route>
			</Route>
			<Route
				path="/logout"
				element={<Logout />}
			/>
		</Route>,
	),
);
