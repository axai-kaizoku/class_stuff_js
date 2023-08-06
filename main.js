/** @format */

function tax(price, taxRate) {
	return(parseInt(price + (taxRate / 100) * price));
}

console.log("The total price including tax is ",tax(100, 10));
