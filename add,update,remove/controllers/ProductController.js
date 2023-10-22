const Product = require('../models/Product');

exports.getAll = async (req, res) => {
	let allProducts = await Product.find({});
	return res.json(allProducts);
};

exports.findProduct = async (req, res) => {
	let foundProduct = await Product.findById(req.params.id);
	return res.json(foundProduct);
};

exports.updateProduct = async (req, res) => {
	let foundProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!foundProduct)
		return res.status(404).json({ message: 'User not found!' });
	res.json(foundProduct);
};

exports.addProduct = async (req, res) => {
	let newProduct = new Product({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
	})
		.save()
		.then((product) => {
			res.json({ message: 'Adding successful!', product });
		});
};
