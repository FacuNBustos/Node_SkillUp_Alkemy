const express = require('express')
const { getAllUsers } = require('../controllers/users/getAllUsers')

const router = express.Router()

// example of a route with index controller get function
router.get('/users', getAllUsers)

module.exports = router
