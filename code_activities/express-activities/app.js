const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Set view engine to ejs
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
	const posts = JSON.parse(fs.readFileSync('./posts/data.json'));
	res.render('index', { posts });
});

app.post('/add-post', (req, res) => {
	const posts = JSON.parse(fs.readFileSync('./posts/data.json'));
	const newPost = {
		title: req.body.title,
		content: req.body.content,
	};
	posts.push(newPost);
	fs.writeFileSync('./posts/data.json', JSON.stringify(posts));
	res.redirect('/');
});

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
