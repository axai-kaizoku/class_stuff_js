import Products from './api';

export const getProductList = () => {
	return Products;
};

export const getProductDetails = async ({ params }) => {
	const response = await fetch(`/api/products/${params.productId}`);

	if (!response.ok) {
		throw new Error('Failed to fetch product details');
	}

	const productDetails = response.json();
	return productDetails;
};
