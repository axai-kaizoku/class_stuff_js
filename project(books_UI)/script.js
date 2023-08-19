function Book(title, author, rating) {
	this.title = title;
	this.author = author;
	this.id = Date.now().toString().slice(5);
	this.rating = rating;
	this.reviews = [];
}

const BookCollection = {
	books: JSON.parse(localStorage.getItem('books')) || [],

	// 1. Add a book
	addBook: function () {
		let bookTitle = document.getElementById('bookTitle').value;
		let bookAuthor = document.getElementById('bookAuthor').value;
		let bookRating = document.getElementById('bookRating').value;
		let book = new Book(bookTitle, bookAuthor, bookRating);
		this.books.push(book);
		this.displayBooks(BookCollection.books);
		attachRemoveListener();
		saveForLater();
		document.getElementById('bookTitle').value = '';
		document.getElementById('bookAuthor').value = '';
		document.getElementById('bookRating').value = '';
	},

	// 2. Remove a book
	removeBook: function (removeId) {
		let bookToBeRemoved = this.books.findIndex((book) => book.id === removeId);
		if (bookToBeRemoved == -1) {
		} else {
			let removedBook = this.books.splice(bookToBeRemoved, 1);
			this.displayBooks(BookCollection.books);
		}
	},

	// 3. Search for a book
	searchBook: function (title) {
		let filteredBooks = this.books.filter((book) => book.title.includes(title));
		if (filteredBooks.length === 0) {
			document.getElementById('userMessage').innerText = 'No Books Found !';
		} else {
			document.getElementById('userMessage').innerText = '';
			this.displayBooks(filteredBooks);
		}
	},

	// 4. Add a review
	reviewBook: function (id, review) {
		let book = this.books.find((book) => book.id === id);
		if (!book) {
		} else {
			book.reviews.push(review);
		}
	},

	// 5. Display the added Book
	displayBooks: function (inputArray) {
		let content = '';

		inputArray.forEach((book) => {
			let individualBook = `<div>
  <h3>Title : ${book.title}</h3>
  <h5>Author : ${book.author}</h5>
  <p>Rating : ${book.rating}</p>
  <button class="remove_button" id="${book.id}">Remove</button>
  </div>`;
			content += individualBook;
		});

		document.getElementById('allBooks').innerHTML = content;
	},
};

// Display book from storage

BookCollection.displayBooks(BookCollection.books);

// Adding Event listner to Add Book Button

let addBookButton = document.getElementById('addBookButton');
addBookButton.addEventListener('click', () => {
	BookCollection.addBook();
});

// Adding Event listner to Remove Book Button
function attachRemoveListener() {
	let allRemoveButtons = document.querySelectorAll('.remove_button');
	allRemoveButtons.forEach((button) => {
		button.addEventListener('click', () => {
			BookCollection.removeBook(button.id);
		});
	});
}

// Adding on change listener to search input

let searchInput = document.getElementById('searchTitle');
searchInput.addEventListener('change', () => {
	BookCollection.searchBook(searchInput.value);
});

function saveForLater() {
	localStorage.setItem('books', JSON.stringify(BookCollection.books));
}
