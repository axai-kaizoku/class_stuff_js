require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const product = require('./routes/product');
const user = require('./routes/user');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', product);
app.use('/users', user);

mongoose.connect(process.env.mongodb_URI, { useNewUrlParser: true }).then(
	() => {
		console.log('Connected to mongoDB');
	},
	(err) => {
		console.log('Error occurred ', err);
	},
);

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
