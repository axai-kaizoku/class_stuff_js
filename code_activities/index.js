function taxRate(arr) {
	// you can change tax according to taxrate
	let taxpercent = 10;
	arr.map((elem) => {
		elem.priceWithTax = elem.price + elem.price * (taxpercent / 100);
	});
	return arr;
}

let data = [
	{ name: 'book', price: 10 },
	{ name: 'pen', price: 2 },
	{ name: 'notebook', price: 5 },
];

console.log(taxRate(data));
