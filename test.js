/** @format */

// This is based on pure luck.
// We can't find the correct in low inputs.
// If these commented alert messages are not there it is almost impossible.

const randomLuck = function () {
	const randNum1 = Math.floor(1 + Math.random() * 90);
  const randNum = Number(randNum1)
	let input;
	while (randNum != input) {
		input = prompt('Enter a number');
    // alert(randNum-5);
		if (randNum == input) {
			alert `Congratulations!`;
			break;
		} else if (randNum > input) {
			alert `Too Low!`;
		} else if (randNum < input) {
			alert `Too High!`;
		}
    // alert(randNum+5);
	}
};

randomLuck();