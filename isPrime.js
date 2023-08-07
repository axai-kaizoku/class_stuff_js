/** @format */
let num;
const prime = function () {
	num = Number(prompt('Enter a number : '));
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return alert(`${num} is not Prime!`);
		}
	}
	return alert(`${num} is Prime!`);
};

prime();
