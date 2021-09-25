var express = require('express');
var router = express.Router();
const { body, validationResult, check } = require('express-validator')
const AuthController = require('../controllers/AuthController')
const auth = require('../middlewares/auth');
const usuarios = require('../dataBase/usuarios.json')
const fs = require('fs')
const flag = "false"
router.post('/user', check('password').isLength(5).notEmpty().withMessage("senha deve conter ao menos 5 caracteres"),
check('email').isEmail().withMessage("email deve conter @"), AuthController.logUser)
router.post('/createUser', check('password').isLength(5).notEmpty().withMessage("senha deve conter ao menos 5 caracteres"),
check('email').isEmail().withMessage("email deve conter @"),
body("email").custom((email) =>{
    // usuariosObj = JSON.parse(fs.readFileSync('usuarios.json'))
    usuarios.forEach((usuario) =>{
        if (usuario.email != email){
            console.log(usuario.email)
            console.log(email)
            return usuario.email != email
        } 
    })
    
}).withMessage("Usuario já existe"), AuthController.createUser)
// router.get('/user',auth, AuthController.userView)
router.get('/logout', AuthController.logout)

module.exports = router