import React from 'react';
import './index.css';

const ProductItem = (props) => {
	const { product, handleBuyNow } = props;

	return (
		<div className="product-item">
			<img
				src={product.imageUrl}
				alt={product.name}
			/>
			<h4>{product.name}</h4>
			<h5>{product.brand}</h5>
			<p>₹ {product.price}</p>

			<div className="add-cart-container">
				<button
					class="add-cart-btn"
					onClick={handleBuyNow}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
