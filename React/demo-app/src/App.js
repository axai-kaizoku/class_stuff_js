import React, { useEffect, useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	// console.log(count);
	useEffect(() => {
		// console.log('useEffect called');
	}, [name]);
	return (
		<div>
			<h1>Count : {count}</h1>

			<br />
			<button
				onClick={() => {
					setCount(count + 1);
					// console.log(count);
				}}>
				+1
			</button>
			<br />
			<button
				onClick={() => {
					setCount(count - 1);
					// console.log(count);
				}}>
				{' '}
				- 1{' '}
			</button>
			<hr />
			<input
				value={name}
				// ref={inputName}
				// onKeyUp={(e) => {
				// 	e.keyCode == 13 && setName(e.target.value);
				// 	console.log(e.target.value);
				// }}
				onChange={(e) => setName(e.target.value)}
			/>
			<h2>{name}</h2>
		</div>
	);
};

export default App;
