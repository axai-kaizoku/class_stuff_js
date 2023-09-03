import './App.css';
import Alert from './Components/Alert';
import profileDetailsList from './Sources/alertData';

function App() {
	return (
		<div className="bg-container">
			<h1 className="heading">Buzz Alerts</h1>
			<div className="buzz-list">
				{profileDetailsList.map((elem) => (
					<Alert alertData={elem} />
				))}
			</div>
		</div>
	);
}

export default App;
