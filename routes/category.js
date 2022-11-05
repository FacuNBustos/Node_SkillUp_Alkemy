const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const createSchema = require('../schemas/categories/create.schema');
const createCategory = require('../controllers/categories/create.category');
const getByIdSchema = require("../schemas/categories/getById.schema");
const getByIdCategory = require('../controllers/categories/getById.category');

const router = express.Router();

router.get("/:id", schemaValidator(getByIdSchema), getByIdCategory.run)
router.post('', schemaValidator(createSchema), createCategory.run);

module.exports = router;
