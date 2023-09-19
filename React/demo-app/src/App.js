import React from 'react';
import Question from './Components/Question';
import './index.css';
import queries from './questions';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Tech Buddy</h1>
				<div className="content">
					{queries.map((q) => (
						<Question question={q} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
