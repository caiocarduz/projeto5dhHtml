var express = require('express');
var router = express.Router();
var auth = require("../middlewares/auth")
var carrinhoController = require('../controllers/carrinhoController')

router.post('/carrinho', carrinhoController.carrinho);
router.get('/pedido', auth,  carrinhoController.pedido);
router.get('/pedido/descricao', carrinhoController.pedidoDescricao);
router.delete('/delete', carrinhoController.removeProduto);

module.exports = router;