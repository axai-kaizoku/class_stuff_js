/** @format */

let books = [
	{
		title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
		year: 1949,
	},
	{
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		year: 1951,
	},
];

let newBook = {
	title: 'Pride and Prejudice',
	author: 'Jane Austen',
	year: 1813,
};

let allBooks = [...books];
allBooks.push(newBook);

console.log(allBooks);
