const express = require('express')
const schemaValidator = require('../middlewares/schemaValidator');
const deleteUser = require('../controllers/users/delete.user');
const deleteSchema = require('../schemas/users/delete.schema');
const { getAllUsers }  = require('../controllers/users/getAllUser');

const router = express.Router();
router.get('/', getAllUsers);

router.delete('/:id', schemaValidator(deleteSchema), deleteUser.run);


module.exports = router
