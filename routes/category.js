const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const createSchema = require('../schemas/categories/create.schema');
const createCategory = require('../controllers/categories/create.category');
const updateCategory = require('../controllers/categories/update.category');
const getByIdSchema = require('../schemas/categories/getById.schema');
const getByIdCategory = require('../controllers/categories/getById.category');
const getAllCategories = require('../controllers/categories/getAll.category');
const updateSchema = require('../schemas/categories/update.schema');
const deleteSchema = require('../schemas/categories/delete.schema');
const deleteCategory = require('../controllers/categories/delete.category')

const router = express.Router();

router.get('/:id', schemaValidator(getByIdSchema), getByIdCategory.run);
router.put('/:id', schemaValidator(updateSchema), updateCategory.put);
router.post('', schemaValidator(createSchema), createCategory.run);
router.get('/', getAllCategories.run);
router.delete('/:id', schemaValidator(deleteSchema), deleteCategory.delete)

module.exports = router;
