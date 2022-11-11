const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const { userLogged } = require('../middlewares/userLogged');
const { ownershipValidator } = require('../middlewares/ownershipValidator');
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

router.post('/', schemaValidator(createSchema), userLogged, post, tokenGenerator.tokenGen);

router.get('/', userLogged, get, tokenGenerator.tokenGen);

router.get(
  '/:id',
  schemaValidator(idSchema),
  userLogged,
  ownershipValidator,
  getById,
  tokenGenerator.tokenGen
);

router.put(
  '/:id',
  schemaValidator(updateSchema),
  userLogged,
  ownershipValidator,
  updateById
);

router.delete(
  '/:id',
  schemaValidator(deleteSchema),
  userLogged,
  ownershipValidator,
  deleteOne
);

module.exports = router;
