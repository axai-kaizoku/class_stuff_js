/** @format */

const books = [
	'The Song of Ice and Fire',
	'Deception',
	'The subtle art of not giving a fuck',
	'Ikegai',
];

const disp = function () {books.forEach((elem, index) => console.log(elem.split(' ').reverse().join(' ')))}

disp();
