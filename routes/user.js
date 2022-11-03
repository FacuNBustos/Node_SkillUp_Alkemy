const express = require('express')
const schemaValidator = require('../middlewares/schemaValidator');
const deleteUser = require('../controllers/users/delete.user');
const deleteSchema = require('../schemas/users/delete.schema');
const createSchema = require('../schemas/users/create.schema');
const { getAllUsers }  = require('../controllers/users/getAllUser');
const { createUsers }  = require('../controllers/users/create.user');

const router = express.Router();
router.get('/', getAllUsers);
router.post('/', schemaValidator(createSchema), createUsers);
router.delete('/:id', schemaValidator(deleteSchema), deleteUser.run);


module.exports = router
