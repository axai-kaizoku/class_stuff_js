const data = require('../../db.json');

module.exports = (req, res) => {
	const products = data.products;
	res.status(200).json({ products });
};
