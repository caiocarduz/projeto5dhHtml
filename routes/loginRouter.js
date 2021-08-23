var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator')
const AuthController = require('../controllers/AuthController')

router.post('logUser', AuthController.logUser)
router.post('createUser', AuthController.createUser)

module.exports = router