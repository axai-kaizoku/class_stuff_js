import express from 'express';
import session from 'express-session';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'mysecretkey',
		resave: false,
		saveUninitialized: true,
	}),
);

const authenticate = (req, res, next) => {
	if (req.session.isAuthenticated) {
		next();
	} else {
		res.redirect('/login');
	}
};

const users = [
	{
		username: 'axai',
		password: 'axai123',
		role: 'student',
	},
	{
		username: 'thanai',
		password: 'thanai123',
		role: 'faculty',
	},
];

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const user = users.find(
		(u) => u.username === username && u.password === password,
	);

	if (user) {
		req.session.isAuthenticated = true;
		req.session.userRole = user.role;
		if (req.session.userRole === 'student') {
			res.redirect('/studentView');
		} else if (req.session.userRole === 'faculty') {
			res.redirect('/facultyView');
		} else {
			res.redirect('/');
		}
	} else {
		res.redirect('/login');
	}
});

app.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.log(err);
		}
		res.redirect('/login');
	});
});

app.get('/studentView', authenticate, (req, res) => {
	if (req.session.isAuthenticated && req.session.userRole === 'student') {
		res.render('studentView');
	} else {
		res.redirect('/login');
	}
});

app.get('/facultyView', authenticate, (req, res) => {
	if (req.session.isAuthenticated && req.session.userRole === 'faculty') {
		res.render('facultyView');
	} else {
		res.redirect('/login');
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}!`);
});
