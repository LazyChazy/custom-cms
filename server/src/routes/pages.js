const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const { authenticate, authorize } = require('../middleware/auth');

router.post('/', authenticate, authorize('admin', 'content_creator'), pageController.createPage);
router.get('/', pageController.getPages);
router.get('/:slug', pageController.getPage);
router.put('/:slug', authenticate, authorize('admin', 'content_creator'), pageController.updatePage);
router.delete('/:slug', authenticate, authorize('admin'), pageController.deletePage);

module.exports = router;