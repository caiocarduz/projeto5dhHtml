var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator')
const AuthController = require('../controllers/AuthController')

router.post('/user', body('password').notEmpty(),body('email').isEmail(), AuthController.logUser)
router.post('/createUser', body('password').notEmpty(), body('email').isEmail(), AuthController.createUser)

module.exports = router