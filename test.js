let data = [];

// selectors
let submitBtn = document.getElementById('submitBtn');
let inputBox = document.getElementById('inputBox');
let taskBox = document.getElementById('taskBox');
let clearItems = document.getElementById('clearItems');

clearItems.addEventListener('click', clearList);

function clearList() {
	data = [];
	createTask(data);
}

submitBtn.addEventListener('click', getValue);

function getValue() {
	let val = inputBox.value;

	if (val != '' && val != ' ') {
		let obj = {
			name: val,
			id: data.length,
		};

		data.push(obj);
		createTask(data);

		inputBox.value = '';
	} // clear the input
}

function createTask(arr) {
	let content = '';
	arr.forEach((task) => {
		let date = new Date();

		let individualTask = `<div class="item">
	<div class="titleAndTime"><h3 class="title">${task.name}</h3>
	<p class="timestamp">${date.toLocaleTimeString()}</p></div>
	<div class="itemBtns">
		<button
			class="editBtn"
			data-id="${task.id}">
			Edit
		</button>
		<button
			class="deleteBtn"
			data-id="${task.id}">
			Delete
		</button>
	</div>
</div>`;
		content += individualTask;
	});

	taskBox.innerHTML = content;

	// Add event listeners to the Edit and Delete buttons
	document.querySelectorAll('.editBtn').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const id = e.target.dataset.id;
			const newValue = prompt('Edit your task:', data[id].name);
			if (newValue) {
				data[id].name = newValue;
				createTask(data);
			}
		});
	});

	document.querySelectorAll('.deleteBtn').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const id = e.target.dataset.id;
			data.splice(id, 1);
			createTask(data);
		});
	});
}
