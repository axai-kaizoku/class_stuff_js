const Router = require('express').Router;
const userController = require('../controller/userController');
const router = Router();

router.get('/', (req, res) => {
	res.json({ message: 'Hello from user!' });
});
router.get('/getAll', userController.getAll);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUser);
router.post('/add', userController.addUser);

module.exports = router;
