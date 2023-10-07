const data = require('../../db.json');

module.exports = (req, res) => {
	// const converted = JSON.parse(data);

	const categories = req.category;
	res.status(200).json({ category: req.params.category });
};
