let allEvents = [
	{
		id: 1,
		name: 'Birthday',
		seats: 10,
		image: './images/birthday.jpg',
	},
	{
		id: 2,
		name: 'Buffet Breakfast',
		seats: 6,
		image: './images/buffet_breakfast.jpg',
	},
	{
		id: 3,
		name: 'Movie',
		seats: 12,
		image: './images/movie.jpg',
	},
	{
		id: 4,
		name: 'Buffet Lunch',
		seats: 0,
		image: './images/buffet_lunch.jpg',
	},
	{
		id: 5,
		name: 'Buffet Dinner',
		seats: 20,
		image: './images/buffet_dinner.jpg',
	},
];

let content = ``;

allEvents.forEach((event) => {
	event = `<div class="event" style="background-image:url('${event.image}')">
  <h3>${event.name}</h3>
  <p>Seats left : ${event.seats}</p>
  <h4>  </h4>
  <button id=${event.id}>Book Now</button>
</div>`;

	content += event;
});

document.getElementById('allEvents').innerHTML = content;

let allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
	button.addEventListener('click', () => checkAvaliability(button));
});

function checkAvaliability(button) {
	let buttonID = button.id;
	let totalSeats = allEvents[buttonID - 1].seats;

	let availablealert = document.querySelectorAll('h4')[buttonID - 1];
	availablealert.style.display = 'block';

	totalSeats == 0
		? (availablealert.innerText = 'Not Available')
		: (availablealert.innerText = 'Available');
}
