const express = require('express')
const schemaValidator = require('../middlewares/schemaValidator');
const deleteUser = require('../controllers/users/delete.user');
const getAllUsersid = require('../controllers/users/getid.user');
const deleteSchema = require('../schemas/users/delete.schema');
const idSchema = require('../schemas/users/getid.schema');

const router = express.Router();

router.delete('/:id', schemaValidator(deleteSchema), deleteUser.run);
router.get('/:id', schemaValidator(idSchema), getAllUsersid.getid);

module.exports = router
