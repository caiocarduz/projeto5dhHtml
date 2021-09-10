var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator')
const AuthController = require('../controllers/AuthController')
const auth = require('../middlewares/auth');

router.post('/user', body('password').notEmpty(),body('email').isEmail(), AuthController.logUser)
router.post('/createUser', body('password').notEmpty(), body('email').isEmail(), AuthController.createUser)
// router.get('/user',auth, AuthController.userView)
router.get('/logout', AuthController.logout)

module.exports = router