import { useLoaderData } from 'react-router-dom';

export default function ProjectDetails() {
	const { name, salesData, employees } = useLoaderData();
	return (
		<div className="details-container">
			<div>
				<h2>Sales Data for {name}</h2>
				<table>
					<thead>
						<tr>
							<th>Revenue</th>
							<th>Profit</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${salesData.revenue}</td>
							<td>${salesData.profit}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<h2>Employees</h2>
				<table>
					<thead>
						<tr>
							<th>Employee Name</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => (
							<tr key={employee}>
								<td>{employee}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
