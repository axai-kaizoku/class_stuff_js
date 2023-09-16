import React from 'react';

class App extends React.Component {
	state = {
		joke: '',
	};

	fetchJoke() {
		fetch(
			'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single',
		)
			.then((response) => response.json())
			.then((data) => this.setState({ joke: data.joke }));
	}

	componentDidMount() {
		this.fetchJoke();
	}

	render() {
		return (
			<div className="container">
				<p>{this.state.joke}</p>
				<button
					onClick={() => {
						this.fetchJoke();
					}}>
					Get Joke
				</button>
			</div>
		);
	}
}

export default App;
