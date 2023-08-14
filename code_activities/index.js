function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

let book1 = new Book('The Song of Ice and Fire', 'Gorge RR Martin', 1989);

let book2 = new Book('Ikegai', 'Momonouske', 2015);

let book3 = new Book('Do It Today', 'Darius', 2000);

let bookCollection = [];
bookCollection.push(book1, book2, book3);

bookCollection.forEach((book) =>
	console.log(
		`Title : ${book.title}, Author : ${book.author}, Year : ${book.year}`,
	),
);
