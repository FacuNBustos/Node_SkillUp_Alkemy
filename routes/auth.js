const express = require('express');
const schemaValidator = require('../middlewares/schemaValidator');
const { login } = require('../controllers/auth/login.auth');
const loginSchema = require('../schemas/auth/login.schema');

const router = express.Router();

router.post('/login', schemaValidator(loginSchema), login);

module.exports = router;
