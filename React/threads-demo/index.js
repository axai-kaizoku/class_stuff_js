const { parentPort } = require('worker_threads');

function performTask() {
	let count = 0;
	while (count < 10) {
		console.log(`Worker : Processing task ${count}`);
		count++;
	}
}

function notifyTaskComplete() {
	parentPort.postMessage('Task Completed!');
}

performTask();
notifyTaskComplete();
