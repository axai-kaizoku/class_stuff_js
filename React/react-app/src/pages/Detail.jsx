import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useGetProductQuery } from '../redux/apiSlice';

export default function Detail() {
	const { id } = useParams();
	const { data: product, isLoading } = useGetProductQuery(id);
	return (
		<Layout>
			{isLoading ? (
				<h2>Please wait..</h2>
			) : (
				<div className="product-detail">
					<h1>{product.title}</h1>
					<h3>${product.cost}</h3>
					<div className="product-likes">👍🏽 {product.likes}</div>
					<p>{product.description}</p>
					<div className="product-reviews">
						{product.reviews.map((review) => (
							<p key={review}>{review}</p>
						))}
					</div>
				</div>
			)}
		</Layout>
	);
}
