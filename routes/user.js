const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const deleteUser = require('../controllers/users/delete.user');
const getAllUsersid = require('../controllers/users/getid.user');
const deleteSchema = require('../schemas/users/delete.schema');
<<<<<<< HEAD
const createSchema = require('../schemas/users/create.schema');
const { getAllUsers }  = require('../controllers/users/getAllUser');
const { createUsers }  = require('../controllers/users/create.user');

const router = express.Router();
router.get('/', getAllUsers);
router.post('/', schemaValidator(createSchema), createUsers);
=======
const { getAllUsers }  = require('../controllers/users/getAllUser');
const idSchema = require('../schemas/users/getid.schema');
const updateSchema = require('../schemas/users/update.schema');
const updateUser = require('../controllers/users/update.user');

const router = express.Router();

router.get('/', getAllUsers);
>>>>>>> 215ff2239663a2fd01f72554d48ac3391e8a6c1e
router.delete('/:id', schemaValidator(deleteSchema), deleteUser.run);
router.get('/:id', schemaValidator(idSchema), getAllUsersid.getid);
router.put('/:id', schemaValidator(updateSchema), updateUser.run);

<<<<<<< HEAD

module.exports = router
=======
module.exports = router;
>>>>>>> 215ff2239663a2fd01f72554d48ac3391e8a6c1e
