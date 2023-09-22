// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductDetails } from '../productLoader';

// const ProductDetails = () => {
// 	const { productId } = useParams();
// 	const [product, setProduct] = useState({});
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchProduct = async () => {
// 			try {
// 				const details = await getProductDetails(productId);
// 				setProduct(details);
// 				setLoading(false);
// 			} catch (err) {
// 				setError(err.message);
// 				setLoading(false);
// 			}
// 		};

// 		fetchProduct();
// 	}, [productId]);

// 	if (loading) return <div className="content">Loading...</div>;
// 	if (error) return <div className="content">Error: {error}</div>;
// 	if (product) return <div className="content">Product found</div>;
// 	if (!product) return <div className="content">Product not found</div>;

// 	return (
// 		<div className="content">
// 			<h1>This is ProductDetails page</h1>
// 			<div className="details">
// 				<img
// 					style={{ marginRight: '300px' }}
// 					src="product.thumbnailUrl"
// 					alt="product.thumbnailUrl"
// 				/>
// 				<div className="specs">
// 					<p>{product.title}</p>
// 					<p>Storage: {product.storage}</p>
// 					<p>Color: {product.color}</p>
// 					<p>Processor: {product.processor}</p>
// 					<p>Link: {product.url}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ProductDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Products from '../api';

export default function ProductDetails() {
	const params = useParams();
	const [product, setProduct] = React.useState(null);

	React.useEffect(() => {
		Products.then((res) => res.json())
			.then((data) => setProduct(data))
			.then((data) => console.log(data));
	}, [params.productId]);

	return (
		<Link to={`/productlist/${product.id}`}>
			<div className="content">
				{/* {product ? (
			<>
				<Link to={`productlist/${product.id}`}>
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
				</Link>
			</>
		) : (
			<div className="content">Loading...</div>
		)} */}
				<h1>Params: __{params.productId}</h1>
			</div>
		</Link>
	);
}
