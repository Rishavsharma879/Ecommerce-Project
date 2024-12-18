const express = require('express');
const { getAllProducts, getProductById, addProduct,updateProduct, deleteProduct, } = require('../controllers/productController');

const router = express.Router();


router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', addProduct);

router.put('/products/:id', updateProduct); 

router.delete('/products/:id', deleteProduct); 

// router.get('/products/category/:category', getProductsByCategory);

module.exports = router;