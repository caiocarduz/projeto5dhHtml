var express = require('express');
var router = express.Router();
const { body, validationResult, check } = require('express-validator')
const AuthController = require('../controllers/AuthController')
const auth = require('../middlewares/auth');

router.post('/user', check('password').isLength(5).notEmpty().withMessage("senha deve conter ao menos 5 caracteres"),check('email').isEmail().withMessage("email deve conter @"), AuthController.logUser)
router.post('/createUser', check('password').isLength(5).notEmpty().withMessage("senha deve conter ao menos 5 caracteres"),check('email').isEmail().withMessage("email deve conter @"), AuthController.createUser)
// router.get('/user',auth, AuthController.userView)
router.get('/logout', AuthController.logout)

module.exports = router