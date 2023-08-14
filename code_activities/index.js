const sortObjectsByProperty = function (arr, property = 'age') {
	return arr.sort((a, b) => {
		if (typeof a[property] === 'string') {
			return a[property].localeCompare(b[property]);
		}
		return a[property] - b[property];
	});
};

let students = [
	{ name: 'John', age: 25 },
	{ name: 'Mary', age: 30 },
	{ name: 'Peter', age: 20 },
];

console.log(sortObjectsByProperty(students, 'name'));
