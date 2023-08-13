function greetUser() {
	let username = document.getElementById('usernameInput').value;
	let heading = document.createElement('h1');
	heading.innerText = `Hello, ${username} !`;
	document.getElementsByTagName('body')[0].appendChild(heading);
}
