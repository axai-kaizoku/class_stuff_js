import express from 'express';
import todoController from './controllers/toDoController';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
// app.set('views', __dirname + './views');

app.use(express.urlencoded({ extended: true }));

app.get('/', todoController.getAllTodos);
app.get('/create', todoController.createToDoForm);
app.post('/create', todoController.createToDoItem);
app.get('/complete/:id', todoController.completeToDoItem);

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}!`);
});
