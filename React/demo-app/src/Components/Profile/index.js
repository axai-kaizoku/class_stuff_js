import './index.css';

const Profile = (props) => {
	const { userDetails } = props;
	const { imageUrl, name, role } = userDetails;
	return (
		<div className="profile-card-container">
			<img
				className="profile-pic"
				src={imageUrl}
				alt="profile-pic"
			/>
			<div>
				<h1 className="profile-name">{name}</h1>
				<p className="profile-role">{role}</p>
			</div>
		</div>
	);
};

export default Profile;
