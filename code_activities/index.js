function calcAge(arr) {
	let currentYear = new Date().getFullYear();
	let newArr = arr.map((elem) => {
		return {
			name: elem.name,
			age: currentYear - elem.birthYear,
		};
	});
	return newArr;
}

let data = [
	{ name: 'John', birthYear: 1990 },
	{ name: 'Mary', birthYear: 1988 },
	{ name: 'Peter', birthYear: 1995 },
];

console.log(calcAge(data));
