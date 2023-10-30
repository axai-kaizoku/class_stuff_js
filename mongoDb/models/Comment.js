const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const commentSchema = new Schema({
	content: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		required: true,
	},
	blog: { type: mongoose.Schema.Types.ObjectId, ref: 'blogs', required: true },
	creationDate: {
		type: Date,
		default: Date.now(),
	},
});

const Comment = mongoose.model('comments', commentSchema);
module.exports = Comment;

// author: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
