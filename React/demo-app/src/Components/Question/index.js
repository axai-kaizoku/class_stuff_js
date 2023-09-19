import React, { useState } from 'react';
import './index.css';

const Question = ({ question }) => {
	const [isActive, setIsActive] = useState(false);
	const { query, reply } = question;
	const renderAnswer = () => {
		if (isActive) {
			return (
				<div className="reply">
					<hr />
					<p>{reply}</p>
				</div>
			);
		}
		return null;
	};

	const onToggleOpen = () => {
		!isActive ? setIsActive(true) : setIsActive(false);
	};

	return (
		<div className="question">
			<div className="details">
				<h2>{query}</h2>
				{renderAnswer()}
			</div>
			<button onClick={onToggleOpen}>{isActive ? ' - ' : ' + '}</button>
		</div>
	);
};

export default Question;
