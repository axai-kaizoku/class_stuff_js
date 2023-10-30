const Comment = require('../models/Comment');

exports.addComment = (req, res) => {
	const newComment = new Comment({
		content: req.body.content,
		author: req.body.author,
		blog: req.body.blog,
	});
	newComment.save().then((comment) => {
		console.log('Comment saved successfully!');
		res.json(comment);
	});
};

exports.getAll = async (req, res) => {
	const all = await Comment.find().populate('author blog');
	res.json(all);
};

exports.delete = async (req, res) => {
	let blogs = await Comment.findByIdAndDelete(req.params.id).populate(
		'author blog',
	);
	res.json(blogs);
};
