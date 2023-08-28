let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', fetchBooks);

let allBooks = document.getElementById('allBooks');
let content = '';

async function fetchBooks() {
	try {
		content = '';
		allBooks.innerHTML = content;

		// Step 1 - Read user input
		let bookTitle = document.getElementById('bookTitle').value;
		document.getElementById('bookTitle').value = '';

		// Step 2 & 3 - Create the request, Send the request and receive response
		let response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`,
		);

		// Check if the response is ok (status 200-299)
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		// Step 4 - Convert response to JS object
		let convertedBooks = await response.json();

		// Step 5 - Display on the front end
		let newBook = convertedBooks.items
			.map((book) => {
				let imgUrl =
					book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
						? book.volumeInfo.imageLinks.thumbnail // 127.99 * 200
						: 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'; // If you have a default image
				let description = book.volumeInfo.description;

				// Trim the description to 50 words
				if (description) {
					description = description.split(' ').slice(0, 50).join(' ');
					if (book.volumeInfo.description.split(' ').length > 50) {
						description += '...';
					}
				}

				if (description === undefined) {
					description = 'No description found';
				}

				return `
                <div class="book">
                    <img src="${imgUrl}" alt="${book.volumeInfo.title}" id="image"/>
                    <h2>${book.volumeInfo.title}</h2>
                    <p>${description}</p>
                </div>`;
			})
			.join('');

		content += newBook;
		allBooks.innerHTML = content;
	} catch (error) {
		allBooks.innerHTML = `<h1>Book not found or some error occurred.</h1>`;
		console.error(
			'There was a problem with the fetch operation:',
			error.message,
		);
	}
}
