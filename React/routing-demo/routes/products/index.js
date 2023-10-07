const products = require('express').Router();
const allProducts = require('./allProducts');

products.get('/', allProducts);

module.exports = products;
