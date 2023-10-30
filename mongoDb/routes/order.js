const Router = require('express').Router;
const orderController = require('../controller/orderController');

const router = Router();

router.post('/add', orderController.add);
router.get('/user/:id', orderController.OrdersByUser);

module.exports = router;
