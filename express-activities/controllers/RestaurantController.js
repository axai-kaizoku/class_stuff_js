const Restaurant = require('../models/Restaurant');

const findAll = async (res) => {
	let allRestaurants = await Restaurant.find({});
	return res.json(allRestaurants);
};

exports.getAll = (req, res) => {
	findAll(res);
};

exports.getRestaurant = async (req, res) => {
	let singleRestaurant = await Restaurant.find(req.params.id);
	return res.json(singleRestaurant);
};

exports.addRestaurant = (req, res) => {
	const newRestaurant = new Restaurant({ name: req.body.name })
		.save()
		.then((rest) => {
			res.json({ message: 'Adding successful!', rest });
		});
};
