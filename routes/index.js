const express = require('express');
const { getAllUsers } = require('../controllers/users/getAllUsers');
const router = express.Router();


router.get('/users', getAllUsers);

module.exports = router
