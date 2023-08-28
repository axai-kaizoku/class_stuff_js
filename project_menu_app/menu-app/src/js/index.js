// API Connection
if (import.meta.env.DEV) {
	import('../api/browser').then(({ worker }) =>
		worker
			.start()
			.then(() => fetch('/dishes'))
			.then((res) => res.json())
			.then((res) => (menu = res)),
	);
}

// Variable declarations
let menu = [];
let allAddToCartButtons = [];
let cart = [];
let allCartDeleteButtons = [];
let allDishes = document.getElementById('allDishes');
let content = '';
let cartContent = '';
let allButtons = document.querySelectorAll('button');

// Function Calls
updateCartCounter();
displayAll(menu);
displayCartDishes();

// Menu functions
function displayAll(dishes) {
	content = '';
	dishes.forEach((dish) => {
		let individualDish = `<div class="dish">
    <img
      src="${dish.img}"
      alt="${dish.title}" />
    <div class="dishOuter">
      <div class="dishInner">
        <h3 class="dishName">${dish.title}</h3>
        <h3 class="dishPrice">$ ${dish.price}</h3>
      </div>
      <p class="dishContent">${dish.desc}</p>
      <button class="dishCartButton" id="${dish.id}">Add to cart</button>
    </div>
  </div>`;
		content += individualDish;
	});
	allDishes.innerHTML = content;
	getCartButtons();
}

// filter logic here
allButtons.forEach((button) =>
	button.addEventListener('click', (e) => {
		filterItems(e.target.innerText);
	}),
);

function filterItems(category) {
	allDishes.innerHTML += '';
	if (category == 'All') {
		displayAll(menu);
	} else {
		let filteredItems = menu.filter(
			(dish) => dish.category.toLowerCase() === category.toLowerCase(),
		);
		displayAll(filteredItems);
	}
}

// Cart functions
function updateCartCounter() {
	document.getElementById('cartButton').innerHTML = '&#128722;' + cart.length;
}

// select all add to cart button
function getCartButtons() {
	let allAddToCartButtons = document.querySelectorAll('.dishCartButton');
	allAddToCartButtons.forEach((button) =>
		button.addEventListener('click', (e) => {
			addDishtoCart(e.target.id);
		}),
	);
}

function addDishtoCart(dishID) {
	let flag = -1;
	menu.forEach((dish) => {
		if (dish.id == dishID) {
			cart.forEach((cartDish) => {
				if (cartDish.id == dishID) {
					cartDish.quantity += 1;
					flag = 1;
				}
			});
			if (flag != 1) {
				let tempDish = { ...dish, quantity: 1 };
				cart.push(tempDish);
			}
		}
	});
	updateCartCounter();
	displayCartDishes();
}

function displayCartDishes() {
	cartContent = '';
	cart.forEach((dish) => {
		let individualDish = `<div class="cartDish">
    <img
      src="${dish.img}"
      alt="${dish.title}" />
    <h3 class="name">${dish.title}</h3>
    <h3 class="price">${dish.price}</h3>
    <h3 class="quantity">${dish.quantity}</h3>
    <button class="removeBtn" id="${dish.id}">Remove</button>
  </div>`;
		cartContent += individualDish;
		// console.log(cartContent);
	});
	document.getElementById('cart').innerHTML = cartContent;
	// console.log(cart);
	getDeleteButtons();
}

// select all delete button
function getDeleteButtons() {
	let allCartDeleteButtons = document.querySelectorAll('.removeBtn');
	allCartDeleteButtons.forEach((button) =>
		button.addEventListener('click', (e) => {
			removeDishFromCart(e.target.id);
		}),
	);
}

function removeDishFromCart(removeID) {
	removeID = parseInt(removeID); // Convert the ID to integer for proper comparison

	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id === removeID) {
			// Compare the dish's ID, not the entire dish object
			cart.splice(i, 1);
			break; // Once the item is found and removed, exit the loop
		}
	}

	updateCartCounter();
	displayCartDishes();
}
