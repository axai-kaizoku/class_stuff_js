class Person {
	constructor(name, id, city) {
		this.name = name;
		this.id = id;
		this.city = city;
	}
	showInfo() {
		return `${this.name} lives in ${this.city}`;
	}
}

class Librarian extends Person {}

class Student extends Person {
	constructor(name, id, city, unv) {
		super(name, id, city);
		this.unv = unv;
	}

	showStudentInfo() {
		return `${this.name} lives in ${this.city} and studies in ${this.unv} and has the student id of ${this.id}`;
	}
}

let newStudent = new Student('Akshay', '3', 'Hyd', 'University of Illunoi');
console.log(newStudent.showStudentInfo());
let newLibrarian = new Librarian('Jane', 2, 'Hyd');
console.log(newLibrarian.showInfo());
