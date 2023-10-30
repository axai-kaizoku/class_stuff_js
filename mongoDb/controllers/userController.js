const User = require('../models/User');

exports.registerUser = (req, res) => {
	User.findOne({
		email: req.body.email,
	}).then((user) => {
		if (user) return res.status(400).json({ message: 'Email already Exists!' });
		else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			});
			newUser.save().then((user) => {
				console.log('Registerd successfull!');
				res.json(user);
			});
		}
	});
};

exports.loginUser = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ email }).then((user) => {
		if (!user) {
			return res.status(404).json({ message: 'User not found!' });
		}

		user.comparePasswords(password, function (err, isMatch) {
			if (err) return err;
			if (!isMatch) return res.json({ message: 'Invalid credentials!' });
			if (isMatch) return res.json({ message: 'User logged in successfully!' });
		});
	});
};

exports.getAllUsers = async (req, res) => {
	let users = await User.find();
	res.json({ users });
};

exports.deleteAll = async (req, res) => {
	let blogs = await User.deleteMany();
	res.json(blogs);
};
