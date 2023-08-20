function compute(x, y, fn) {
	if (typeof x === 'number' && typeof y === 'number') {
		return () => fn(x, y);
	}
	return () => null;
}

function multiply(x, y) {
	return x * y;
}

function add(x, y) {
	return x + y;
}

function substract(a, b) {
	return a - b;
}

let sub = compute(40, 20, substract);
let multpy = compute(10, 20, multiply);
let ad = compute(10, 20, add);

console.log(sub());
console.log(ad());
console.log(multpy());
