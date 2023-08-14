/** @format */

let numbers = [];

let choice;

do {
	console.log(
		'Choose an option : \n1. Add a number\n2. Remove a number\n3. Print the numbers\n.4 Exit',
	);
	choice = parseInt(prompt('Enter your choice: '));

	switch (choice) {
		case 1:
			let numberToAdd = prompt('Enter the value to be added: ');
			numbers.push(numberToAdd);
			console.log('Added !');
			break;
		case 2:
			let numberToRemove = prompt('Enter the value to be removed: ');
			let indexToRemove = numbers.indexOf(numberToRemove);
			if (indexToRemove !== -1) {
				numbers.splice(indexToRemove, 1);
				console.log('Removed !');
			}
			break;
		case 3:
			for (const number of numbers) {
				console.log(number);
			}
			break;
		case 4:
			console.log('Thanks for stopping by ');
			break;
		default:
			console.log('Invalid Choice!');
	}
} while (choice >= 1 && choice <= 4);
