import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className="nav">
			<div className="nav-logo">
				<strong>PROJECT MASTER</strong>
			</div>
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/about">About</Link>
				<Link to="/login">Login</Link>
				<Link to="/logout">Logout</Link>
			</div>
		</div>
	);
}
