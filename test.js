class Vehicle {
	constructor(manufacturer, model, year) {
		this.manufacturer = manufacturer;
		this.model = model;
		this.year = year;
	}
	getInfo() {
		return `
		Manufacturer : ${this.manufacturer}
		Model : ${this.model}
		Released Year : ${this.year}
		`;
	}
}

class Car extends Vehicle {
	constructor(manufacturer, model, year, fuelType) {
		super(manufacturer, model, year);
		this.fuelType = fuelType;
	}

	getInfo() {
		return `
		Manufacturer : ${this.manufacturer}
		Model : ${this.model}
		Released Year : ${this.year}
		Fuel Type : ${this.fuelType}
		`;
	}
}

const vehicle = new Vehicle('Volvo', 'TX-900', 2014);
console.log(vehicle);

const polo = new Car('Volkwagen', 'DTI-SPORT', 2020, 'Diesel');
const i20 = new Car('Hyundai', 'MODY', 2019, 'Diesel');

console.log(polo);
console.log(i20);
