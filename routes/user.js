const express = require('express')
const schemaValidator = require('../middlewares/schemaValidator');
const deleteUser = require('../controllers/users/delete.user');
const deleteSchema = require('../schemas/users/delete.schema');

const router = express.Router();

router.delete('/:id', schemaValidator(deleteSchema), deleteUser.run);

module.exports = router
