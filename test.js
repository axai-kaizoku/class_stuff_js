function close() {
	let count = 0;
	return () => {
		count++;
		return count;
	};
}

let counter = close();

console.log(close()());
console.log(`-------`);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
