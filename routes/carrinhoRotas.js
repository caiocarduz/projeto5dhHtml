var express = require('express');
var router = express.Router();

var carrinhoController = require('../controllers/carrinhoController')

router.get('/', carrinhoController.carrinho);

module.exports = router;