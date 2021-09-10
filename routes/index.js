var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController')
var carrinhoController = require('../controllers/carrinhoController')
var produtoDetalhes = require('../controllers/produtoDetalhes')

/* GET home page. */
router.get('/', indexController.home);
router.get('/index', indexController.home);
router.get('/home', indexController.home);
router.get('/produtos', indexController.produtos)
router.get('/login', indexController.login)
router.get('/carrinho', carrinhoController.carrinho);
router.get('/produtodetalhes', indexController.produtoDetalhes)
module.exports = router;
