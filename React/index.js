// const args = process.argv.slice(2);

// if (args.length === 0) {
// 	console.log('Hello World!');
// } else {
// 	console.log(args);
// }

const yargs = require('yargs');

const notes = require('./notes.js');

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			type: 'string',
			describe: 'Enter note title',
			demandOption: true,
		},
		content: {
			type: 'string',
			describe: 'Enter note description',
			demandOption: false,
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.content);
	},
});

yargs.command({
	command: 'list',
	describe: 'Display all the notes',
	handler() {
		notes.listNotes();
	},
});

yargs.parse();
