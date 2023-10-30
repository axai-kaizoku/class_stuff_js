const Router = require('express').Router;
const router = Router();
const commentController = require('../controllers/commentController');

router.get('/', (req, res) => {
	res.json({ message: 'Hello Bruh from comment!' });
});
router.post('/add', commentController.addComment);
router.get('/getAll', commentController.getAll);
router.post('/delete/:id', commentController.delete);

module.exports = router;
