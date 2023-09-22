import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../productLoader';

const ProductDetails = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const details = await getProductDetails(productId);
				setProduct(details);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchProduct();
	}, [productId]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (product) return <div className="content">Product found</div>;
	if (!product) return <div>Product not found</div>;

	return (
		<div className="content">
			<h1>This is ProductDetails page</h1>
			<div className="details">
				<img
					style={{ marginRight: '300px' }}
					src="product.thumbnailUrl"
					alt="product.thumbnailUrl"
				/>
				<div className="specs">
					<p>{product.title}</p>
					<p>Storage: {product.storage}</p>
					<p>Color: {product.color}</p>
					<p>Processor: {product.processor}</p>
					<p>Link: {product.url}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
