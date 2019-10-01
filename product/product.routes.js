const express = require('express')
const router = express.Router();
const post = require('./product.controller');


router.post('/post',post.createProduct);
router.get('/get/:id',post.getproductById);
router.put('/put/:id',post.updateProductById);
router.delete('/delete/:id',post.deleteByProductId);

module.exports = router