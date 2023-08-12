// let allBooks = [
// 	{
// 		id: 1,
// 		title: 'Angles and Demons',
// 		author: 'Dan Brown',
// 		ratings: [3.0, 3.5, 4.2, 4.6],
// 		reviews: [
// 			{
// 				username: 'John',
// 				content:
// 					'		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odit.Enim totam, recusandae, qui aliquid pariatur fugit est magni esse eaquedistinctio placeat laudantium voluptatibus. Perspiciatis ex nobis hic libero!',
// 			},
// 			{
// 				username: 'Jane',
// 				content:
// 					'		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odit.Enim totam, recusandae, qui aliquid pariatur fugit est magni esse eaquedistinctio placeat laudantium voluptatibus. Perspiciatis ex nobis hic libero!',
// 			},
// 			{
// 				username: 'Bob',
// 				content:
// 					'		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odit.Enim totam, recusandae, qui aliquid pariatur fugit est magni esse eaquedistinctio placeat laudantium voluptatibus. Perspiciatis ex nobis hic libero!',
// 			},
// 		],
// 	},
// ];

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.id = Date.now().toString();
	this.ratings = [];
	this.reviews = [];
}

const BookCollection = {
	books: [],

	// 1. Add a book
	addBook: function (book) {
		this.books.push(book);
		console.log(`Book ${book.title} added successfully with ID ${book.id} !`);
	},
};

let choice = -1;

do {
	console.log(
		'Choose an option : \n1. Add a book\n2. Remove a book\n3. Search for a book\n4. Add a rating\n5. Add a review\n6. Compute average of all ratings\n7. Exit',
	);

	choice = parseInt(prompt('Enter your choice : '));

	switch (choice) {
		case 1:
			let title = prompt('Enter the title: ');
			let author = prompt('Enter the author name:');
			let year = prompt('Enter the release year');
			let newBook = new Book(title, author, year);
			BookCollection.addBook(newBook);
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			console.log('Thanks for stopping by!');
			break;
		default:
	}
} while (choice >= 1 && choice < 7);
