const express = require('express');
const mongoose = require('mongoose');

const User = require('./routes/user');
const Product = require('./routes/product');
const Order = require('./routes/order');

const app = express();
mongoose
	.connect(
		'mongodb+srv://02b3akshay:02b3akshay@cluster0.g4nd49h.mongodb.net/e-commerce',
	)
	.then((req, res) => {
		console.log('Successfully connected to mongoDB');
	});

app.use(express.urlencoded({ extended: true }));

app.use('/product', Product);
app.use('/user', User);
app.use('/order', Order);

app.get('/', (req, res) => {
	res.json({ message: 'hello Bruh from port 3000!' });
});

app.listen(3000, () => {
	console.log('Server is running on PORT 3000!');
});
