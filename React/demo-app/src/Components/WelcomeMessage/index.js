import './index.css';

const WelcomeMessage = (props) => {
	const { timing } = props;
	return (
		<>
			<h1 className="greeting">This is a beautiful {timing}</h1>
		</>
	);
};

export default WelcomeMessage;
