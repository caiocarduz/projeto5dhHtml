var express = require('express');
var router = express.Router();

var carrinhoController = require('../controllers/carrinhoController')

router.post('/carrinho', carrinhoController.carrinho);
router.get('/pedido', carrinhoController.pedido);

module.exports = router;