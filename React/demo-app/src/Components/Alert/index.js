const Alert = (props) => {
	const { alertData } = props;
	const { className, iconUrl, message, buzz_container } = alertData;
	return (
		<>
			<div className={`${buzz_container} ${className}`}>
				<img
					src={iconUrl}
					className="icon"
					alt="icon"
				/>
				<p className="message">{message}</p>
			</div>
		</>
	);
};

export default Alert;
