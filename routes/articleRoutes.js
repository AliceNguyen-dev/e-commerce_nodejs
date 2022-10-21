const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();



// Article routes
router.route('/')
    .get(articleController.getAllArticle)
    .post(articleController.createArticle)

router.route('/:id')
    .add(articleController.addArticle)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle)


module.exports = router;