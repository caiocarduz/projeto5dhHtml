const {Carrinho, Produto, Usuario, Pedido2, PedidoDetalhes, CarrinhoProduto, sequelize} = require("../models");
const { Op } = require("sequelize");
const pedidodetalhes = require("../models/pedidodetalhes");

module.exports = {

    historico: async (req, res, next) => {

        const p = await Usuario.findOne({where:{
			email: req.session.user.email
		 }})

        const pedidoDetalhes = await PedidoDetalhes.findAll({where:{
			UserId: p.id
		},
		include:[
				{
				model: Produto,
				as: "produtos"
			},
			{
				model: Usuario,
				as: "usuarios"
			}
		]})

        res.json(pedidoDetalhes)

    }




}