import React from 'react';

const Item = ({ product, qp }) => {
	return (
		<>
			<div className="item">
				<img
					src={product.image}
					alt={product.name}
				/>
				<p>{product.name}</p>
				<p>{product.quantity}</p>
				<p>{product.price}</p>
				<p>{qp}</p>
			</div>
		</>
	);
};

export default Item;
