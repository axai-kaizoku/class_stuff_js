/** @format */

let choice = -1;

do {
	choice = parseInt(
		prompt(
			'Pick an item : \n1. Tea\n2. Coffee\n3. Softdrinks\n4. Water\n5. Exit'
		)
	);
	switch (choice) {
		case 1:
			alert('Tea is coming up!');
			break;
		case 2:
			alert('Coffee is coming up!');
			break;
		case 3:
			alert('Softdrink is coming up!');
			break;
		case 4:
			alert('Water is coming up!');
			break;
		case 5:
			alert('Thankyou for shopping by');
			break;
		default:
			alert('Invalid choice');
	}
} while (choice >= 1 && choice <= 4);
