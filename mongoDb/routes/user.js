const Router = require('express').Router;
const router = Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/deleteAll', userController.deleteAll);

module.exports = router;
