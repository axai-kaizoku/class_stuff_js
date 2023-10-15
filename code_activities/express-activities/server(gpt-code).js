const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse POST request data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	// Render the feedback form. In real scenarios, you would render an HTML form.
	res.send(
		'<form action="/submit-feedback" method="post"><input name="feedback" type="text" placeholder="Your feedback"><button type="submit">Submit</button></form>',
	);
});

app.post('/submit-feedback', (req, res) => {
	const feedback = req.body.feedback;

	// Process the feedback data. For example, you could save it to a database.
	console.log('Received feedback:', feedback);

	// Respond to the client.
	res.send('Thank you for your feedback!');
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
