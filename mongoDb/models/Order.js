const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	orderedProduct: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
	orderStatus: {
		type: String,
		default: 'Confirming your order!',
	},
});
// type: mongoose.Schema.Types.ObjectId,

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
