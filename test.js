let date = new Date('2023-08-13 16:30:39');
console.log(date);

// 5/20/2020

// const options = {
// 	year: 'numeric',
// 	month: 'numeric',
// 	day: 'numeric',
// };

// const fomrattedDate = date.toLocaleString('en-US', options);
// console.log(fomrattedDate);

// May/20/2020

const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

const timeOptions = {
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	hour12: false,
};

const fomrattedDate = date.toLocaleString('en-US', timeOptions);
console.log(fomrattedDate);
