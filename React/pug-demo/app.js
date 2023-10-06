const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');

app.get('/', async (req, res) => {
	const query = await axios.get('http://localhost:3001/results');
	res.render('index', { employees: query.data });
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
