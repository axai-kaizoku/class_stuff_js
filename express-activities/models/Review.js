const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	resID: {
		type: String,
		required: true,
	},
	userID: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		default: 0,
		minimum: 0,
		maximum: 5,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now(),
	},
});

const Review = mongoose.model('reviews', reviewSchema);
module.exports = Review;
