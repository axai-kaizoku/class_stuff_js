import './index.css';

const Employee = (props) => {
	const { emp } = props;
	const { image, name, position, email, phone } = emp;
	return (
		<div className="emp-container">
			<img
				src={image}
				alt={name}
				className="emp-img"
			/>
			<div className="emp-details">
				<h2 className="emp-name">{name}</h2>
				<h3 className="emp-role">{position}</h3>
				<p className="emp-email">{email}</p>
				<p className="emp-phone">{phone}</p>
			</div>
		</div>
	);
};

export default Employee;
