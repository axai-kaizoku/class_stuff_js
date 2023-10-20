import express from 'express';
import morgan from 'morgan';
import path from 'path';
import postModel from './controller/post';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', postModel);

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}!`);
});
