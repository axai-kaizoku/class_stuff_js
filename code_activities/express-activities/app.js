import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('home');
});

app.post('/posts', (req, res) => {
	const { post } = req.body;
	// Store post in database (for simplicity, not implemented here)
	res.status(201).json({ message: 'Post shared successfully!', post });
});

app.get('/users/:userId/posts', (req, res) => {
	const userId = req.params.userId;
	// Fetch posts from the database by userId (for simplicity, not implemented here)
	res.json({ posts: [] });
});

app.post('/users/:userId/follow', (req, res) => {
	const userIdToFollow = req.params.userId;
	// Implement logic to let the current user follow userIdToFollow
	res
		.status(200)
		.json({ message: `Successfully followed user with ID ${userIdToFollow}` });
});

app.post('/posts/:postId/like', (req, res) => {
	const postId = req.params.postId;
	// Implement logic to like the post with postId
	res
		.status(200)
		.json({ message: `Successfully liked post with ID ${postId}` });
});

app.use((req, res, next) => {
	res.status(404).json({ error: 'Resource not found' });
});

app.listen(3000, () => {
	console.log('Server is running on PORT 3000');
});
