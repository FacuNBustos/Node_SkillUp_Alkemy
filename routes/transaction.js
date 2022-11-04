const express = require("express");
const {get} = require("../controllers/transactions/getAll.transactions");


const router = express.Router()
router.get("/", get)

module.exports = router;