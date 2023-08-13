/** @format */
const EXTech = function (name, branch) {
	this.name = name;
	this.branch = branch;
	this.genSubjects = function () {
		let subs = [];
		if (this.branch == 'EEE') {
			subs.push('Transformers', 'Analog Electronics', 'C++', 'Circuits');
		} else if (this.branch == 'CSE') {
			subs.push('Java', 'AIML', 'Data Structures', 'Algorithms');
		} else if (this.branch == 'ECE') {
			subs.push(
				'Digital Electronics',
				'Power Electronics',
				'C language',
				'Digital Signal Processing',
			);
		} else if (this.branch == 'Mech') {
			subs.push(
				'Thermodynamics',
				'Fluid Mechanics',
				'Physics',
				'Engineering Drawing',
			);
		} else if (this.branch == 'Civil') {
			subs.push(
				'Surveying',
				'Structural Engineering',
				'Irrigation Engineering',
				'Building materials',
			);
		} else {
			console.log('Invalid Branch...');
		}

		return `The subjects for selected branch are :
		\n--------------------------------------------\n${subs.toString()}\n--------------------------------------------`;
	};

	this.genRegNumber = function () {
		let school = 'EX Academy';
		let year = new Date().getFullYear().toString().substr(-2);
		let schoolShort = school.slice(0, 2).toUpperCase();
		let randomNum = Math.floor(1 + Math.random() * 90);
		let regNum = `${schoolShort}${year}${this.name
			.charAt(0)
			.toUpperCase()}${this.name.charAt(3).toUpperCase()}${randomNum}${this.branch.toString().toUpperCase()}`;

		return `\nYour Registration number is : ${regNum.toString()}\n`;
	};
};


const student = new EXTech('AKSHAY', 'Mech');

console.log(`\nYour name : ${student.name}\n`)
console.log(`Your Branch : ${student.branch}\n`)

console.log(student.genSubjects());

console.log(student.genRegNumber()); 
