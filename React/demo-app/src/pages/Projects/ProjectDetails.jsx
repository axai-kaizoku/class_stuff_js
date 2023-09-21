export default function ProjectDetails() {
  return (
    <div className="details-container">
      <div>
        <h2>Sales Data for Project A</h2>
        <table>
          <thead>
            <tr>
              <th>Revenue</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$20000</td>
              <td>$5000</td>
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
            <tr>
              <td>John Doe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
