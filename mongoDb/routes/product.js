// getall,create,,getproductId,deleteproduct,updatequantity
// name, price, description, quantity

const Router = require('express').Router;
const productController = require('../controller/productController');

const router = Router();

router.get('/getAll', productController.getAll);
router.post('/add', productController.add);
router.get('/:id', productController.getProductById);
router.post('/delete/:id', productController.deleteProduct);
router.post('/update/:id', productController.updateProduct);

module.exports = router;
