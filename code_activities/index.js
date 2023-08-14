function countByType(arr) {
	let typeCount = {};
	for (let item of arr) {
		let type = typeof item;

		// Special case for null, since typeof null returns "object"
		// if (item === null) {
		// 	type = 'null';
		// }

		// Increment the count for the determined data type in the typeCount object
		if (typeCount[type]) {
			typeCount[type]++;
		} else {
			typeCount[type] = 1;
		}
	}

	return typeCount;
}

const mixedArr = [
	1,
	2,
	'a',
	'b',
	true,
	false,
	null,
	undefined,
	{},
	[],
	() => {},
];

console.log(countByType(mixedArr));
