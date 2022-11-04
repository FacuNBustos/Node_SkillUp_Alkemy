const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const {getById} = require('../controllers/transactions/getById.transaction');
const {get} = require("../controllers/transactions/getAll.transactions");
const {deleteOne} = require('../controllers/transactions/delete.transaction');
const idSchema = require('../schemas/transactions/getById.schema');
const deleteSchema = require('../schemas/transactions/delete.schema')
const router = express.Router();

router.get("/", get)
router.get('/:id', schemaValidator(idSchema), getById);
router.delete('/:id', schemaValidator(deleteSchema), deleteOne)

module.exports = router;

