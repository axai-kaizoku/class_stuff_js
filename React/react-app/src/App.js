// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Action from './Components/Action';

// {
// 	/* <header className="App-header">
// 				<h1>Hello</h1>
// 			</header> */
// }

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<Home />}></Route>
						<Route
							path="/movies"
							element={<Movies />}></Route>
						<Route
							path="/movies/action"
							element={<Action />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
