import Product from '../components/Product';
import Layout from '../components/Layout';
import { useGetProductsQuery } from '../redux/apiSlice';

export default function Catalog() {
	const { data: products, isLoading } = useGetProductsQuery();
	return (
		<Layout>
			{isLoading ? (
				<h2>Please wait</h2>
			) : (
				<div className="products">
					{products.map((product) => (
						<Product
							key={product.id}
							{...product}
						/>
					))}
				</div>
			)}
		</Layout>
	);
}
