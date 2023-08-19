let saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', storePost);

function storePost() {
	// Reading the <input> value
	let blogTitle = document.getElementById('blogTitle').value;
	// New <li> tag created
	let newPostItem = document.createElement('li');
	// New <p> tag created
	let newPostContent = document.createElement('p');
	// Adding <input> to <p>
	newPostContent.innerText = blogTitle;
	// Adding <p> to <li>
	newPostItem.appendChild(newPostContent);
	// Adding all Posts list
	let allPosts = document.getElementById('allPosts');
	// Adding <li> to <ul>
	allPosts.appendChild(newPostItem);
	// Clearing the <input> field
	document.getElementById('blogTitle').value = '';
}
