/** @format */

function groupArrayElements(inputArr, n) {
	// Check if n is a valid number
	const result = [];
	if (n <= 0 || !Number.isInteger(n)) {
		return result;
	}

	// calculate the length of each subarray
	const len = Math.floor(inputArr.length / n);

	// initialise the array
	let start = 0;
	let end = len;

	for (let i = 0; i < n; i++) {
		if (i === n - 1) {
			result.push(inputArr.slice(start));
		} else {
			result.push(inputArr.slice(start, end));
		}
		start = end;
		end += len;
	}

	return result;
}

console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 6));
