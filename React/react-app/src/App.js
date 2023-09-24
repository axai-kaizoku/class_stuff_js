import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Action from './Components/Action';
import Comedy from './Components/Comedy';
import MovieDetail from './Components/MovieDetail';

function App() {
	return (
		<>
			<div className="App">
				{/* <header className="App-header">
					<h1>Hello</h1>
				</header> */}
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/action"
							element={<Action />}
						/>
						<Route
							path="/action/1"
							element={<MovieDetail />}
						/>
						<Route
							path="/action/2"
							element={<MovieDetail />}
						/>
						<Route
							path="/comedy"
							element={<Comedy />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
