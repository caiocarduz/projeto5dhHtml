var express = require('express');
const usuariosController = require('../controllers/usuariosController');
var router = express.Router();
var auth = require('../middlewares/auth')

/* GET users listing. */
router.get('/historico', auth, usuariosController.historico)
module.exports = router;
