let username = prompt('Enter your name: ');
if (username.length > 0 && username.includes(/^\s /g)) {
	document.getElementById('user').innerText = 'Hello, ' + username;
}
