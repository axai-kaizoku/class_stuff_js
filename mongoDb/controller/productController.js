const Product = require('../models/Product');

exports.getAll = async (req, res) => {
	const allProducts = await Product.find();
	res.json(allProducts);
};

// create,getall,getproductId,deleteproduct,updatequantity
// name, price, description, quantity

exports.add = async (req, res) => {
	const addProduct = await new Product({
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
		quantity: req.body.quantity,
	});
	addProduct.save();
	res.json(addProduct);
};

exports.getProductById = async (req, res) => {
	const getProduct = await Product.findById(req.params.id);
	res.json(getProduct);
};

exports.deleteProduct = async (req, res) => {
	const product = await Product.findByIdAndDelete(req.params.id);
	res.json(product);
};

exports.updateProduct = async (req, res) => {
	const product = await Product.findByIdAndUpdate(req.params.id, {
		quantity: req.body.quantity,
	});
	res.json(product);
};
