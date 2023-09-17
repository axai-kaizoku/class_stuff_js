import React from 'react';
import './index.css';

const Country = ({ details }) => {
	return (
		<div className="country">
			<div className="img">
				<img
					src={details.flags.png}
					alt="picsum"
				/>
			</div>
			<div className="details">
				<h2>{details.name.common}</h2>
				<h4>Official Name: {details.name.official}</h4>
				<h4>Capital: {details.capital}</h4>
				<h4>Region: {details.region}</h4>
			</div>
		</div>
	);
};

export default Country;
