const express = require('express');
// const { getAllProducts , createProduct , updateProduct , deleteProduct, getProductDetails } = require('../controllers/productController')

const { registrationUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.route('/register').post(registrationUser);
router.route('/login').post(loginUser);


router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

module.exports = router;