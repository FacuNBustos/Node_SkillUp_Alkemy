const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const {getById} = require('../controllers/transactions/getById.transaction');
const {get} = require("../controllers/transactions/getAll.transactions");
const {deleteOne} = require('../controllers/transactions/delete.transaction');
const idSchema = require('../schemas/transactions/getById.schema');
const updateSchema = require('../schemas/transactions/update.schema')
const { updateById } = require('../controllers/transactions/updateById.transaction')
const deleteSchema = require('../schemas/transactions/delete.schema')
const {post} = require('../controllers/transactions/create.transactions')
const createSchema = require('../schemas/transactions/create.schema')

const router = express.Router();

router.get("/", get)
router.get('/:id', schemaValidator(idSchema), getById);
router.post('/', schemaValidator(createSchema), post);
router.put('/:id', schemaValidator(updateSchema), updateById);
router.delete('/:id', schemaValidator(deleteSchema), deleteOne)

module.exports = router;

