import './App.css';
import Images from './Components/images';
import Heading from './Components/heading';
import TeamName from './Components/teamname';

function App() {
	return (
		<div className="App">
			<Heading />
			<Images
				team_1="https://m.media-amazon.com/images/I/41a7y+YD9yL.jpg"
				team_2="https://wallpaperaccess.com/thumb/910036.jpg"
			/>
			<TeamName
				team_1="MANCHESTER UNITED"
				team_2="CHELSEA"
			/>
		</div>
	);
}

export default App;
