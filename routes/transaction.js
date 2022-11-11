const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const { getById } = require('../controllers/transactions/getById.transaction');
const { get } = require('../controllers/transactions/getAll.transaction');
const { deleteOne } = require('../controllers/transactions/delete.transaction');
const idSchema = require('../schemas/transactions/getById.schema');
const updateSchema = require('../schemas/transactions/update.schema');
const {
  updateById,
} = require('../controllers/transactions/updateById.transaction');
const deleteSchema = require('../schemas/transactions/delete.schema');
const { post } = require('../controllers/transactions/create.transaction');
const createSchema = require('../schemas/transactions/create.schema');
const tokenGenerator = require('../middlewares/tokenGenerator');

const router = express.Router();

router.get('/', get,tokenGenerator.tokenGen);
router.get('/:id', schemaValidator(idSchema), getById ,tokenGenerator.tokenGen);
router.post('/', schemaValidator(createSchema), post ,tokenGenerator.tokenGen);
router.put('/:id', schemaValidator(updateSchema), updateById);
router.delete('/:id', schemaValidator(deleteSchema), deleteOne);

module.exports = router;
