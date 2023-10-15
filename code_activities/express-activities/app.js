import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/projects', (req, res) => {
	res.render('projects');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.post('/feedback', (req, res) => {
	const feedback = req.body.feedback;
	console.log('Received feedback: ', feedback);

	res.send('Thankyou for your feedback');
});

app.listen(3000, () => {
	console.log('Server is running on PORT 3000');
});
