const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	shippingAddress: {
		type: String,
		required: true,
	},
});

userSchema.pre('save', function (next) {
	var user = this;
	if (!user.isModified('password')) return next();

	bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);

			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

const User = mongoose.model('User', userSchema);
module.exports = User;
