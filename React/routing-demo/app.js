const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/', routes);

app.listen(3000, () => {
	console.log(`                ^_^\n`);
	console.log('Server is running on PORT 3000');
});
