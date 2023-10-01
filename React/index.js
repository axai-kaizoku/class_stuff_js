require('dotenv').config();

const fs = require('fs');

function writeLogFile(data) {
	fs.writeFileSync('server-log.txt', data, () => {
		console.log('Error added to log');
	});
}

function readLogFile() {
	const d = new Date();
	const data = process.env.MY_DATA;
	try {
		const errorData = fs.readFileSync('server-log.txt');
		console.log(errorData.toString());
	} catch (e) {
		writeLogFile(
			`${d.toLocaleString(
				'en-IN',
			)} - ${e.toString()} - process.env-code : ${data}`,
		);
	}
}

readLogFile();
readLogFile();
