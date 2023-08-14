function age(arr) {
	let sum = 0;
	let youngestStudent = arr[0];
	let oldestStudent = arr[0];

	for (let elem of arr) {
		sum += elem.age;

		if (elem.age < youngestStudent.age) {
			youngestStudent = elem;
		}
		if (elem.age > oldestStudent.age) {
			oldestStudent = elem;
		}
	}

	let avg = sum / arr.length;

	return `{
    avgAge: ${avg},
    oldest: ${oldestStudent.name}
    youngest: ${youngestStudent.name}
  }`;
}

const sampleData = [
	{ name: 'John', age: 25 },
	{ name: 'Mary', age: 30 },
	{ name: 'Peter', age: 20 },
	{ name: 'Sarah', age: 28 },
];
console.log(age(sampleData));
