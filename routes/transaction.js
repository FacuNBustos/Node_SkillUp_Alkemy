const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const {getById} = require('../controllers/transactions/getById.transaction');
const {get} = require("../controllers/transactions/getAll.transactions");
const idSchema = require('../schemas/transactions/getById.schema');
const updateSchema = require('../schemas/transactions/update.schema')
const { updateById } = require('../controllers/transactions/updateById.transaction')

const router = express.Router();
router.get("/", get)
router.get('/:id', schemaValidator(idSchema), getById);
router.post('/:id', schemaValidator(updateSchema), updateById);


module.exports = router;

