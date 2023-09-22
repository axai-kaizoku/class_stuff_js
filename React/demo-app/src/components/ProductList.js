import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Products from '../api';

const ProductList = () => {
	return (
		<div className="content">
			<h1>This is ProductList</h1>
			<ul>
				{Products.map((product) => (
					<Link
						key={product.id}
						className="link"
						to={`/products/${product.id}`}>
						<li key={product.id}>{product.title}</li>
					</Link>
				))}
			</ul>
			<Outlet />
		</div>
	);
};

export default ProductList;
