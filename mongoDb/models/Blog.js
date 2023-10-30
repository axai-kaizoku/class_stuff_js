const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const blogSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		required: true,
	},
	creationDate: {
		type: Date,
		default: Date.now(),
	},
});

const Blog = mongoose.model('blogs', blogSchema);
module.exports = Blog;
// author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
