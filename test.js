let Title = document.getElementById('blogTitle');

Title.addEventListener('change', (e) => {
	e.target.value.length == 0
		? (Title.style.border = '3px solid red')
		: (Title.style.border = '3px solid green');
});
