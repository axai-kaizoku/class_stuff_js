const express = require('express');
const mongoose = require('mongoose');
const User = require('./routes/user');
const Blog = require('./routes/blog');
const Comment = require('./routes/comment');

const app = express();

mongoose
	.connect(
		'mongodb+srv://02b3akshay:02b3akshay@cluster0.g4nd49h.mongodb.net/blog',
	)
	.then((req, res) => {
		console.log('Connected to Database');
	});

app.use(express.urlencoded({ extended: true }));

app.use('/user', User);
app.use('/blog', Blog);
app.use('/comment', Comment);

app.listen(3000, () => {
	console.log('Server is running on PORT 3000!');
});
