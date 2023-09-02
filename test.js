let submitBtn = document.getElementsByTagName('button')[0];
let container = document.getElementById('container');

submitBtn.addEventListener('click', getVal);

function getVal() {
	let term = document.getElementById('input').value;

	if (term.length > 1 && term != ' ') {
		fetch(
			`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${term}`,
		)
			.then((response) => response.json())
			.then((data) => genCard(data));
	}
	document.getElementById('input').value = '';
}

function genCard(arr) {
	// console.log(arr);
	let content = '';
	for (let i = 0; i < 10; i++) {
		let individualCard = `<div class="card">
	<h2 class="title">${arr.query.search[i].title}</h2>
	<p class="desc">${arr.query.search[i].snippet}</p>
</div>`;
		content += individualCard;
	}

	container.innerHTML = content;
}
