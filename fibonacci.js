/** @format */

let num1 = 1,
	num2 = 2,
	num3 = 3;

console.log(num1);
console.log(num2);
console.log(num3);
for (let i = 5; i <= 10; i++) {
	let result = num1 + num2 + num3;
	console.log(result);
	num1 = num2;
	num2 = num3;
	num3 = result;
}
