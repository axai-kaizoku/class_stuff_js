const categories = require('express').Router();
const allCategories = require('./allCategories');
const single = require('./single');

categories.get('/', allCategories);

categories.get('/:category', single);

module.exports = categories;
