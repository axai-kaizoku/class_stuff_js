import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={<Catalog />}
			/>
			<Route
				path="/product/:id"
				element={<Detail />}
			/>
		</>,
	),
);
