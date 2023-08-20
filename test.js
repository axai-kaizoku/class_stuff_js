function cartTotal() {
	let item = 0;
	return (newItem) => {
		item += newItem;
		return item;
	};
}

const cart = cartTotal();
console.log(cartTotal()(100));
console.log(`-------`);
console.log(cart(110));
console.log(cart(800));
console.log(cart(880));
