import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const secretKey = 'mysecretkey';

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const users = [
	{
		id: 1,
		username: 'john',
		password: 'john123',
	},
	{
		id: 2,
		username: 'jenny',
		password: 'jenny123',
	},
];

// Routes

app.post('/signup', (req, res) => {
	const { username, password } = req.body;
	const id = users.length + 1;
	users.push({ id, username, password });
	res.status(201).json({ message: 'User created Successfully!' });
	console.log(users);
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const user = users.find(
		(u) => u.username === username && u.password === password,
	);

	if (!user) {
		res.status(401).json({ message: 'Invalid credentials!' });
	}

	// Generate Token
	const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
		expiresIn: '1h',
	});

	res.json({ token });
});

// Protected Route

app.get('/protected', verifyToken, (req, res) => {
	res.json({ message: 'Protected route accessed!' });
});

function verifyToken(req, res, next) {
	const token = req.headers.authorization.split(' ')[1];

	if (!token) {
		res.status(401).json({ message: 'No token provided!' });
	}

	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			res.status(401).json({ message: 'Invalid token!' });
		}

		req.user = decoded;
		next();
	});
}

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}!`);
});
