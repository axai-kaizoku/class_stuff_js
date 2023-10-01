const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, content, date = new Date()) => {
	const notes = loadNotes();

	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		const dateNow = new Date();
		notes.push({
			title: title,
			content: content,
			date: dateNow.toLocaleString('en-IN'),
		});
		saveNote(notes);
		console.log(chalk.green('Note added!'));
	} else {
		console.log(chalk.red.inverse('Duplicate note found!'));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	if (notes.length === 0) {
		console.log(chalk.red.bold.inverse('No notes found'));
	} else {
		console.log(chalk.yellow.inverse('Your Notes: '));
		notes.forEach((note) =>
			console.log(
				chalk.blue.bold.inverse(note.title),
				chalk.magenta.inverse(note.content),
				chalk.yellow.inverse(note.date),
			),
		);
	}
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

const saveNote = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
	loadNotes: loadNotes,
	saveNotes: saveNote,
	addNote: addNote,
	listNotes: listNotes,
};
