const TeamName = (props) => {
	const { team_1, team_2 } = props;
	return (
		<div className="teamName">
			<h2>{team_1}</h2>
			<h2> V/S </h2>
			<h2>{team_2}</h2>
		</div>
	);
};

export default TeamName;
