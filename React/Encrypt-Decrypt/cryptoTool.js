const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-cbc';

function encrypt(file, password) {
	const iv = crypto.randomBytes(16);
	const salt = crypto.randomBytes(64);
	const key = crypto.pbkdf2Sync(password, salt, 2145, 32, 'sha512');

	const cipher = crypto.createCipheriv(algorithm, key, iv);
	const input = fs.createReadStream(file);
	const output = fs.createWriteStream(file + '.enc');

	input.pipe(cipher).pipe(output);
	output.on('finish', () => {
		console.log('Encrypted file written to disk!');
	});
}

function decrypt(file, password) {
	const readIv = fs.createReadStream(file, { end: 15 });
	let iv;
	readIv.on('data', (chunk) => {
		iv = chunk;
	});

	readIv.on('close', () => {
		const readStream = fs.createReadStream(file, { start: 16 });
		const decipher = crypto.createDecipheriv(algorithm, password, iv);
		const output = fs.createWriteStream(file.slice(0, -4));

		readStream.pipe(decipher).pipe(output);
		output.on('finish', () => {
			console.log('Decrypted file written to disk!');
		});
	});
}

module.exports = { encrypt, decrypt };
