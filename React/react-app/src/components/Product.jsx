import { Link } from 'react-router-dom';
import LikeButtons from './LikeButtons';
import { useUpdateLikesMutation } from '../redux/apiSlice';

export default function Product({ id, title, cost, description, likes }) {
	const [updateLikes, { isLoading }] = useUpdateLikesMutation();
	function increment(evt) {
		evt.preventDefault();
		updateLikes({ id, likes: likes + 1 });
	}

	function decrement(evt) {
		evt.preventDefault();
		updateLikes({ id, likes: likes - 1 });
	}

	return (
		<Link to={`/product/${id}`}>
			<div className="product">
				<h2>{title}</h2>
				<h4>${cost}</h4>
				<p>{description}</p>
				<LikeButtons
					value={likes}
					onIncrement={increment}
					onDecrement={decrement}
					disabled={isLoading}
				/>
			</div>
		</Link>
	);
}
