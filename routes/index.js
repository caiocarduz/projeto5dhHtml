var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController')
var carrinhoController = require('../controllers/carrinhoController')


/* GET home page. */
router.get('/', indexController.home);
router.get('/produtos', indexController.produtos)
router.get('/login', indexController.login)
router.get('/carrinho', carrinhoController.carrinho);
module.exports = router;
