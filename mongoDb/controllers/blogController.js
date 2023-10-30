const Blog = require('../models/Blog');

exports.addBlog = (req, res) => {
	const newBlog = new Blog({
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
	});
	newBlog.save().then((blog) => {
		console.log('Blog created Successfully!');
		res.json(blog);
	});
};

exports.getAllBlogs = async (req, res) => {
	let blogs = await Blog.find().populate('author');
	res.json(blogs);
};

exports.getBlogById = async (req, res) => {
	let blog = await Blog.findById(req.params.id).populate('author');
	res.json(blog);
};

exports.getBlogAndUpdate = async (req, res) => {
	let blog = await Blog.findByIdAndUpdate(
		req.params.id,
		{
			content: req.body.content,
		},
		{ new: true },
	).populate('author');
	res.json(blog);
};

exports.deleteAll = async (req, res) => {
	let blogs = await Blog.deleteMany();
	res.json(blogs);
};
