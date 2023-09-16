import React from 'react';
import Country from './Components/index';

class App extends React.Component {
	state = {
		data: [],
	};

	fetchData = async () => {
		await fetch('https://restcountries.com/v3.1/all')
			.then((response) => response.json())
			.then((data) => this.setState({ data: data }));
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		console.log(this.state.data);
		return (
			<div className="container">
				<h1>World Tour</h1>
				<div className="content">
					{this.state.data.map((e) => (
						<Country details={e} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
