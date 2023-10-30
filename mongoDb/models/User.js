const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.pre('save', function (next) {
	let user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);

		// hash the password using new Salt
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePasswords = function (candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

const User = mongoose.model('users', userSchema);
module.exports = User;
