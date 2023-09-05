import './App.css';
import Employee from './Components/Employee';
import employeeData from './Sources/EmpData';

function App() {
	return (
		<div className="bg-container">
			<div className="heading">Employee List</div>
			<div className="emp-list">
				{employeeData.map((e, i) => (
					<Employee
						emp={e}
						key={e.id}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
