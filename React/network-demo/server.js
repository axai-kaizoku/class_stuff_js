const net = require('net');
const fs = require('fs');

const PORT = 3000;
const receivedFilePath = './received_file.txt';

const server = net.createServer((socket) => {
	console.log('Client connected!');

	const fileStream = fs.createWriteStream(receivedFilePath);

	socket.on('data', (data) => {
		fileStream.write(data);
	});

	socket.on('end', () => {
		console.log('File received successfully!');
		fileStream.end();
		socket.destroy();
	});

	socket.on('error', (err) => {
		console.log('An error occurred : ', err);
		fileStream.close();
		socket.destroy();
	});
});

server.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
