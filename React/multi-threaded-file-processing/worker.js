const { workerData, parentPort } = require('worker_threads');
const fs = require('fs');

const countLines = (filepath) => {
	const data = fs.readFileSync(filepath, 'utf-8');
	const lines = data.split('\n').length;
	return lines;
};

parentPort.postMessage(countLines(workerData));
