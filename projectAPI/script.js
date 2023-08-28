// https://www.googleapis.com/books/v1/volumes?q=quilting

let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', fetchBooks);

let allBooks = document.getElementById('allBooks');
let content = '';

function fetchBooks() {
	// Step 1 - Read user input
	let bookTitle = document.getElementById('bookTitle').value;
	// console.log(bookTitle);
	document.getElementById('bookTitle').value = '';

	// Step 2 - Create the request
	let myRequest = new XMLHttpRequest(); // readystate = 0
	myRequest.open(
		'GET',
		`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`,
	); // readystate = 1

	// Step 3 - Send the request and receive response
	myRequest.send(); // readystate = 2

	// server processing, readystate = 3
	// after response, readystate = 4
	myRequest.onreadystatechange = () => {
		if (myRequest.readyState === 4 && myRequest.status === 200) {
			let convertedBooks = JSON.parse(myRequest.response);
			let newBook = convertedBooks.items
				.map((book) => {
					let imgUrl =
						book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
							? book.volumeInfo.imageLinks.thumbnail
							: ''; // Provide a default image path if you have one
					return `
                  <div class="book">
                      <img src="${imgUrl}" alt="${book.volumeInfo.title}"/>
                      <h2>${book.volumeInfo.title}</h2>
                      <p>${book.volumeInfo.description}</p>
                  </div>`;
				})
				.join('');
			content += newBook;
		}
		allBooks.innerHTML = content;
	};
	content = '';
	allBooks.innerHTML = content;
	// Step 4  - Convert response to JS object

	// Step 5 - Display on the front end
}
