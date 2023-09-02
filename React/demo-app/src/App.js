import WelcomeMessage from './Components/WelcomeMessage/index';
import './App.css';

function App() {
	return (
		<div className="App">
			<WelcomeMessage timing="morning" />
			<WelcomeMessage timing="evening" />
			<WelcomeMessage timing="night" />
		</div>
	);
}

export default App;
