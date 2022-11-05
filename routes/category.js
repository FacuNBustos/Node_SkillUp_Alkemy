const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const createSchema = require('../schemas/categories/create.schema');
const createCategory = require('../controllers/categories/create.category');

const router = express.Router();

router.post('', schemaValidator(createSchema), createCategory.run);

module.exports = router;
