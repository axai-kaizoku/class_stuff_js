const Posts = [
	{
		id: 1,
		title: 'Compass is an app',
		author: 'Axai Y',
		content: 'This is the main description of the Compass app from Axai Y',
	},
	{
		id: 2,
		title: 'Express is super!',
		author: 'John',
		content: 'Express is a super app.',
	},
	{
		id: 3,
		title: 'React is also super',
		author: 'Jenny Bowling',
		content:
			'The React is a library not a framework, but it is not easy. It contains hooks, redux for state management, react router and many more.',
	},
	{
		id: 4,
		title: 'Linux is a good os for programming',
		author: 'Jane',
		content:
			"This is good for aesthetic looks and feel but it's complicated to use for begineers !. Anyway most people use Mac for JS lang.",
	},
];

const postModel = (req, res) => {
	res.render('home', { Posts });
};

export default postModel;

// app.get('/', (req, res) => {
// 	res.render('home', { Posts });
// });
