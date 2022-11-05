const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const createSchema = require('../schemas/categories/create.schema');
const createCategory = require('../controllers/categories/create.category');
const getAllCategories = require('../controllers/categories/getAll.category');

const router = express.Router();

router.post('', schemaValidator(createSchema), createCategory.run);
router.get('/', getAllCategories.run);

module.exports = router;
