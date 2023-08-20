class Courier {
	constructor(weight, destination, source, bookedBy) {
		this.weight = weight;
		this.destination = destination;
		this.source = source;
		this.bookedBy = bookedBy;
	}

	bookCourier() {
		this.price = this.weight > 20 ? 200 : 100;
		return `Courier Booked! The price is ${this.price}`;
	}

	showCourier() {
		return `Courier Booked by ${this.bookedBy} is headed to ${this.destination}. It weighs ${this.weight}.`;
	}
}

let choice = -1;

do {
	let myCourier = new Courier(500, 'Shimla', 'Hyd', 'Akshay');
	console.log(`Choose one:\n1. Book Courier\n2. Show Courier\n3. Exit`);
	choice = parseInt(prompt('Enter your choice : '));
	switch (choice) {
		case 1:
			console.log(myCourier.bookCourier());
			break;
		case 2:
			console.log(myCourier.showCourier());
			break;
		case 3:
			console.log(`Thanks for Shopping By!`);
			break;
		default:
			console.log(`Invalid`);
			break;
			2;
	}
} while (choice > 0 && choice < 3);
