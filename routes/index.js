const express = require('express')
const { getUsers } = require('../controllers/users/usersListAllController')

const router = express.Router()

// example of a route with index controller get function
router.get('/test', getUsers)

module.exports = router
