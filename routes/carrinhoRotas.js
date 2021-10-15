var express = require('express');
var router = express.Router();
var auth = require("../middlewares/auth")
var carrinhoController = require('../controllers/carrinhoController');
const { carrinho } = require('../controllers/carrinhoController');

router.post('/carrinho', carrinhoController.carrinho);
router.get('/pedido', auth,  carrinhoController.pedido);
router.get('/pedido/descricao', carrinhoController.pedidoDescricao);
router.get('/finalizarpedido', carrinhoController.finalizarPedido);
router.delete('/delete', carrinhoController.removeProduto);

module.exports = router;