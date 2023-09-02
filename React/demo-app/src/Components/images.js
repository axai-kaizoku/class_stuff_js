const Images = (props) => {
	const { team_1, team_2 } = props;
	return (
		<div className="img">
			<img
				src={team_1}
				alt="team-1"
				className="teamImg"
			/>
			<img
				src={team_2}
				alt="team-2"
				className="teamImg"
			/>
		</div>
	);
};

export default Images;
