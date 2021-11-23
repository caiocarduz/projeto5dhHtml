var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController')
var carrinhoController = require('../controllers/carrinhoController')
const { body, validationResult } = require('express-validator')

/* GET home page. */
router.get('/', indexController.home);
router.get('/index', indexController.home);
router.get('/home', indexController.home);
router.get('/produtos', indexController.produtos)
router.get('/produtos/categoria/:idCategoria', indexController.getCategoria)
router.get('/login', indexController.login)
router.get('/carrinho', carrinhoController.carrinho);
router.get('/produtodetalhes/:id', indexController.produtoDetalhes)
router.get('/search', indexController.search)
module.exports = router;
