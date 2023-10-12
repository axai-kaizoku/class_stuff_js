const { Worker } = require('worker_threads');

const files = ['./file1.txt', './file2.txt', './file3.txt'];

const processFileInThread = (file) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./worker.js', { workerData: file });
		worker.on('message', resolve);
		worker.on('error', reject);
		worker.on('exit', (code) => {
			if (code !== 0) {
				reject(new Error(`Worker stopped with exit code ${code}`));
			}
		});
	});
};

async () => {
	const promises = files.map((file) => processFileInThread(file));
	const results = await Promise.all(promises);
	console.log(results);
};
