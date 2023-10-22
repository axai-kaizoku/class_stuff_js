const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/all', productController.getAll);
router.get('/get/:id', productController.findProduct);
router.put('/update/:id', productController.updateProduct);
router.post('/add', productController.addProduct);

module.exports = router;
