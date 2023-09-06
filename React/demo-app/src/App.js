import { Component } from 'react';

class App extends Component {
	state = {
		switch: 'on',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WY_Yh3PcEmZDaqUyruDCeQX-qsxgV8TSyY7ExdYu_3eCBocS5EO1YqfCpJImcD4CLA4&usqp=CAU',
	};
	bulbON = () => {
		this.setState({
			switch: 'on',
			image:
				'https://e7.pngegg.com/pngimages/33/977/png-clipart-incandescent-light-bulb-lighting-transparency-and-translucency-bulb-light-fixture-lamp-thumbnail.png',
		});
	};
	bulbOFF = () => {
		this.setState({
			switch: 'off',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WY_Yh3PcEmZDaqUyruDCeQX-qsxgV8TSyY7ExdYu_3eCBocS5EO1YqfCpJImcD4CLA4&usqp=CAU',
		});
	};
	render() {
		return (
			<div className="container">
				<img
					alt="piscum-random"
					src={this.state.image}
				/>
				<div className="buttons">
					<button onClick={this.bulbON}>ON</button>
					<button onClick={this.bulbOFF}>OFF</button>
				</div>
			</div>
		);
	}
}

export default App;
