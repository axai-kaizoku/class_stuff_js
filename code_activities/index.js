const evenNum = function (arr) {
	let finalarr = [];
	arr.forEach((elem) => (elem % 2 === 0 ? finalarr.push(elem) : elem));
	return finalarr;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenNum(array));
