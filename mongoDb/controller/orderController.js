const Order = require('../models/Order');

exports.add = async (req, res) => {
	const newOrder = new Order({
		customer: req.body.customer,
		orderedProduct: req.body.orderedProduct,
		orderStatus: req.body.orderStatus,
	});
	newOrder.save();
	res.json(newOrder);
};

exports.OrdersByUser = async (req, res) => {
	const order = await Order.find({ customer: req.params.id }).populate(
		'orderedProduct orderStatus customer',
	);
	res.json(order);

	// res.json({ message: 'Orders by User coming soon ;) ' + req.params.id });
};

// app.get('/orders/user/:userId', (req, res) => {
// 	Order.find({ customer: req.params.userId })
// 			.populate('products') // Optional: to fetch related product details
// 			.exec((err, orders) => {
// 					if (err) res.status(500).send(err);
// 					else res.json(orders);
// 			});
// });
