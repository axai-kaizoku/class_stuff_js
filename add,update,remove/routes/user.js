const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/getall', userController.getAll);
router.post('/add', userController.addUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.removeUser);

module.exports = router;
