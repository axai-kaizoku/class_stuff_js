/** @format */
let choice = 1;
do {
	choice = prompt('Pick an item: \n1. Tea\n2. Coffee\n3. Softdrinks\n4. Water');
	alert('Your choice is : ', choice);
} while (choice >= 0 && choice <= 5);
          