const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const uploadImage = require('../middlewares/multer');
const { userLogged } = require('../middlewares/userLogged');
const { ownershipValidator } = require('../middlewares/ownershipValidator');
const deleteUser = require('../controllers/users/delete.user');
const getAllUsersid = require('../controllers/users/getid.user');
const deleteSchema = require('../schemas/users/delete.schema');
const createSchema = require('../schemas/users/create.schema');
const { getAllUsers } = require('../controllers/users/getAllUser.js');
const { createUsers } = require('../controllers/users/create.user');
const idSchema = require('../schemas/users/getid.schema');
const updateSchema = require('../schemas/users/update.schema');
const updateUser = require('../controllers/users/update.user');

const router = express.Router();

router.post(
  '/',
  schemaValidator(createSchema),
  uploadImage.single('avatar'),
  createUsers
);

router.get('/', userLogged, getAllUsers);

router.get(
  '/:id',
  schemaValidator(idSchema),
  userLogged,
  ownershipValidator,
  getAllUsersid.getid
);

router.put(
  '/:id',
  schemaValidator(updateSchema),
  uploadImage.single('avatar'),
  userLogged,
  ownershipValidator,
  updateUser.run
);

router.delete(
  '/:id',
  schemaValidator(deleteSchema),
  userLogged,
  ownershipValidator,
  deleteUser.run
);

module.exports = router;
