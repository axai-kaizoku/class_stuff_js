const data = require('../../db.json');

module.exports = (req, res) => {
	const categories = data.categories;
	res.status(200).json({ categories });
};
