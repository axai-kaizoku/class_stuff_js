import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
	let { id } = useParams();

	return (
		<div>
			<h2>Details for Movie {id}</h2>
			<p>Sample details...</p>
		</div>
	);
};

export default MovieDetails;
