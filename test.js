let h1title = document.querySelector('h1');

h1title.addEventListener('mouseover', function () {
	h1title.style.backgroundColor = 'yellow';
});

h1title.addEventListener('mouseout', function () {
	h1title.style.backgroundColor = 'transparent';
});
