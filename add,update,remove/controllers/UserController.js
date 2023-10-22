const User = require('../models/User');

exports.getAll = async (req, res) => {
	let allUsers = await User.find({});
	return res.json(allUsers);
};

exports.addUser = async (req, res) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
	})
		.save()
		.then((user) => {
			res.json({ message: 'User Added to DB!', user });
		});
};

exports.updateUser = async (req, res) => {
	try {
		let foundUser = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!foundUser) {
			return res.status(404).json({ message: 'User not found!' });
		}
		res.json(foundUser);
	} catch (err) {
		console.log('Error occured updating the user', err);
		res.json(err);
	}
};

exports.removeUser = async (req, res) => {
	let foundUser = await User.findByIdAndDelete(req.params.id);
	let allUsers = await User.find({});
	if (!foundUser) return res.status(404).json({ message: 'No User found!' });
	res.json({ allUsers });
};
