const http = require('http');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');

	if (req.url === '/api') {
		if (req.method === 'GET') {
			const responseMessage = { message: 'Hi there!' };

			res.statusCode = 200;
			res.end(JSON.stringify(responseMessage));
		} else {
			res.statusCode = 405;
			res.end(JSON.stringify({ error: 'method not allowed' }));
		}
	} else {
		res.statusCode = 404;
		res.end(JSON.stringify({ error: 'page not found!' }));
	}
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
