const routes = require('express').Router();
const categories = require('./categories');
const products = require('./products');

routes.use('/categories', categories);
routes.use('/products', products);

routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected' });
});

module.exports = routes;
