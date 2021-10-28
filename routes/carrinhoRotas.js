var express = require('express');
var router = express.Router();
var auth = require("../middlewares/auth")
var carrinhoController = require('../controllers/carrinhoController');
const { carrinho } = require('../controllers/carrinhoController');

router.post('/carrinho', auth, carrinhoController.carrinho);
router.get('/pedido', auth,  carrinhoController.pedido);
router.get('/pedido/descricao', carrinhoController.pedidoDescricao);
router.get('/finalizarpedido', auth, carrinhoController.finalizarPedido);
router.delete('/delete', auth, carrinhoController.removeProduto);

module.exports = router;