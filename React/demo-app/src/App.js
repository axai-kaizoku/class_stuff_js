import React from 'react';
import CartItems from './Data';
import Item from './Item';

const App = () => {
	const calculateCartTotal = () => {
		let total = 0;
		CartItems.forEach((item) => {
			total += item.price * item.quantity;
		});
		return total;
	};

	return (
		<div className="container">
			<h1>Shopping Cart</h1>
			<div className="items">
				{CartItems.map((e, i) => (
					<>
						<Item
							product={e}
							key={e.id}
							qp={e.price * e.quantity}
						/>
					</>
				))}
			</div>

			<h2>{calculateCartTotal()}</h2>
		</div>
	);
};

export default App;
