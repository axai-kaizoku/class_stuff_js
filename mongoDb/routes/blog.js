const Router = require('express').Router;
const router = Router();
const blogController = require('../controllers/blogController');

router.get('/', (req, res) => {
	res.json({ message: 'Hello Bruh! from blog' });
});
router.post('/add', blogController.addBlog);
router.get('/getAll', blogController.getAllBlogs);
router.get('/get/:id', blogController.getBlogById);
router.post('/update/:id', blogController.getBlogAndUpdate);
router.post('/deleteAll', blogController.deleteAll);

module.exports = router;
