const express = require('express');
// const { getAllProducts , createProduct , updateProduct , deleteProduct, getProductDetails } = require('../controllers/productController')

const { registrationUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.route('/register').post(registrationUser);
router.route('/login').post(loginUser);

module.exports = router;