function removeDup(arr) {
	let newArr = [];
	for (let string of arr) {
		if (!newArr.includes(string)) {
			newArr.push(string);
		}
	}
	return newArr;
}

let array = [
	'apple',
	'banana',
	'orange',
	'apple',
	'pear',
	'banana',
	'kiwi',
	'kiwi',
];

console.log(removeDup(array));
