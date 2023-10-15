import express from 'express';
import { join } from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use('/assets', express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('home', {
		posts: [
			{
				id: 1,
				user: 'Axai Y',
				image: '//picsum.photos/id/237/300/300',
				content:
					'The express frame work is more convenient to use and not strict to libraries',
			},
			{
				id: 2,
				user: 'Carry Minati',
				image: '//picsum.photos/id/77/300/300',
				content: "It's a great templating language and very easy to use!",
			},
			{
				id: 3,
				user: 'Jon Snow',
				image: '//picsum.photos/id/74/300/300',
				content: 'Winter is coming Bruh!',
			},
			{
				id: 4,
				user: 'Alice Tower',
				image: '//picsum.photos/id/64/300/300',
				content: 'Night is still young. #night #hightower',
			},
			{
				id: 5,
				user: 'Scott Mime',
				image: '//picsum.photos/id/24/300/300',
				content: 'Northern places are very good to visit in winter.',
			},
			{
				id: 6,
				user: 'Larry wheels',
				image: '//picsum.photos/id/12/300/300',
				content: 'Power Quality and Facts is a good subject',
			},
		],
	});
});

app.get('/create-post', (req, res) => {
	res.render('createPost');
});

app.use((req, res, next) => {
	res.render('error');
});

app.listen(3000, () => {
	console.log('Server is running on PORT 3000');
});
