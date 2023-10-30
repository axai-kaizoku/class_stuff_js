const User = require('../models/User');

exports.getAll = async (req, res) => {
	const allUsers = await User.find();
	res.json(allUsers);
};

exports.addUser = async (req, res) => {
	const newUser = await new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		shippingAddress: req.body.address,
	});
	newUser.save();
	res.json(newUser);
};

exports.getUser = async (req, res) => {
	const user = await User.findById(req.params.id);
	res.json(user);
};

exports.loginUser = (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	User.findOne({ email }).then((user) => {
		if (!user) return res.status(404).json({ message: 'Invalid Credentials!' });

		user.comparePassword(password, function (err, isMatch) {
			if (err) throw err;
			if (!isMatch) return res.json({ message: 'Invalid Credentials!' });
			if (isMatch) return res.json({ message: 'User logged in successfully!' });
		});
	});
};
