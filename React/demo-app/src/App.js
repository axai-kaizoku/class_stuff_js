import React, { useState, createContext, useContext } from 'react';

const nameContext = createContext();

const App = () => {
	const [name, setName] = useState('React F*** you');
	return (
		<nameContext.Provider value={name}>
			<div className="container">
				<h1>Hello</h1>
				<ComponentA />
			</div>
		</nameContext.Provider>
	);
};

export default App;

const ComponentA = () => {
	return (
		<div className="container">
			<h2>ComponentA</h2>
			<ComponentB />
		</div>
	);
};

export const ComponentB = () => {
	const name = useContext(nameContext);
	return (
		<>
			<div className="container">
				<h2>ComponentB</h2>
				<p>{name}</p>
			</div>
		</>
	);
};
