/** @format */

let orderData1 = {
	name: 'Shampoo',
	cost: 500,
	discount: 10,
	taxRate: 10,
	inStock: true,
	calculatePrice: function () {
		return `The total price was ${(this.cost + (this.taxRate * 100) / this.cost - (this.discount * 100) / this.cost).toFixed(2)}`;
	},
	displayInstock: function () {
		if (this.inStock) {
			return this.name + ' is in stock!';
		} else {
			return this.name + ' is not in stock!';
		}
	},
	showDiscount: function () {
		return 'The total discount applied was :' + this.discount;
	},
};

console.log(orderData1.calculatePrice());
console.log(orderData1.displayInstock());
console.log(orderData1.showDiscount());

