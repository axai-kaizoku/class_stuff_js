const express = require('express');
const PORT = 3000;
const app = express();

app.get('/about', (req, res) => {
	res.send({ message: 'Hello there!' });
});

app.post('/login', (req, res) => {
	res.send(req);
	console.log(req.body);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
