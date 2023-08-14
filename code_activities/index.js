function updateClock() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');

	const timeString1 = ``;
	const timeString = `<p>${hours}:${minutes}:${seconds}</p>`;

	document.getElementById('clock').innerHTML = timeString;
}

updateClock();

setInterval(updateClock, 1000);
