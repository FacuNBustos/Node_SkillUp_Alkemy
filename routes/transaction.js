const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const {getById} = require('../controllers/transactions/getById.transaction');
const idSchema = require('../schemas/transactions/getById.schema');

const router = express.Router();

router.get('/:id', schemaValidator(idSchema), getById);

module.exports = router;
