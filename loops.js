/** @format */

'use strict';
const user = {
	id: 2,
	name: 'Jon Snow',
	age: 25,
	title: 'The king of the north',
};

for (const prop in user) {
	console.log(prop);
}


// for-in: exclusively for objects
// for-of: exclusively for array