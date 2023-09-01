document.getElementById('toggle').addEventListener('click', changeTheme);

function changeTheme() {
	const main = document.querySelector('.main');
	const timeElements = document.querySelectorAll('.time');
	const descElements = document.querySelectorAll('.desc');
	const titleElements = document.querySelectorAll('.title');

	if (main.classList.contains('dark')) {
		// Switch to light theme
		main.classList.remove('dark');
		timeElements.forEach((time) => time.classList.remove('dark'));
		descElements.forEach((desc) => desc.classList.remove('dark'));
		titleElements.forEach((title) => title.classList.remove('dark'));
	} else {
		// Switch to dark theme
		main.classList.add('dark');
		timeElements.forEach((time) => time.classList.add('dark'));
		descElements.forEach((desc) => desc.classList.add('dark'));
		titleElements.forEach((title) => title.classList.add('dark'));
	}
}
