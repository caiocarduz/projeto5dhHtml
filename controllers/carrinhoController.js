const {Carrinho, Produto, Usuario, Pedido2, PedidoDetalhes, CarrinhoProduto, sequelize} = require("../models");
const { Op } = require("sequelize");

module.exports = {
	carrinho:(req, res) => {
		produtoId = req.cookies.carrinho.id
		const carrinho = Carrinho.create({UserId: req.session.user.id, ProdutoId: produtoId}).then(() => {
			res.redirect("/pedido")
		}).catch((error) => {
			res.status(404).redirect("/home")
		})
	},
	pedido: async (req, res, next) => {
		const p = await Carrinho.findAll({where:{
			UserId: req.session.user.id
		},
		attributes: [
			[sequelize.fn('SUM', sequelize.col('produto.preco')), 'totalprice'],
		  ],
		include:[
				{
				model: Produto,
				as: "produto"
			},
			{
				model: Usuario,
				as: "usuario"
			}
		]

		 })

		 totalPrice = p.map(el => el.dataValues.totalprice)

		 const produtosCarrinho = await Carrinho.findAll({where:{
			UserId: req.session.user.id
		},
		include:[
				{
				model: Produto,
				as: "produto"
			},
			{
				model: Usuario,
				as: "usuario"
			}
		]

		 })

		//  const prodCarrinhos = (pProdutos.flat())
		//  console.log(prodCarrinhos)
		// // res.redirect("/pedido/descricao")
		 res.render("pedido", {pedidos: produtosCarrinho, logged_user : req.session.user, totalPrice: totalPrice})
		// res.json(pProdutos)
	},
	pedidoDescricao: async (req, res) => {
		// const p = await Carrinho.findAll({where:{
		// 	UserId: req.session.user.id
		// },
		// include: Produto
		//  })
		// const pProdutos = p.map(el => el.Produtos)
		// const prodCarrinhos = (pProdutos.flat())
		// res.render("pedido", {pedidos: prodCarrinhos, logged_user : req.session.user})


	},
	removeProduto: async (req, res) => {
		
		try{
			console.log(req)
			idCarrinho = await Carrinho.findOne({where: {
				produtoid: req.session.user.id
			}})
			await Carrinho.destroy( {where:{
				[Op.and]:[
					{ id: req.body.id },
					{UserId:  req.session.user.id}
	
				]
			}})

			// await CarrinhoProduto.destroy({where:{
			// 	CarrinhoId : idCarrinho.id
			// }})

			res.redirect("/pedido")

		} catch(e){
			console.log(e)
		}

	},
	finalizarPedido: async (req, res) => {
		const p = await Usuario.findOne({where:{
			email: req.session.user.email
		 }})
		const somaPreco = await Carrinho.findAll({where:{
			UserId: p.id
		},
		attributes: [
			[sequelize.fn('SUM', sequelize.col('produto.preco')), 'totalprice'],
		  ],
		include:[
				{
				model: Produto,
				as: "produto"
			},
			{
				model: Usuario,
				as: "usuario"
			}
		]})
		const carrinho = await Carrinho.findAll({where:{
			UserId: p.id
		},
		include:[
				{
				model: Produto,
				as: "produto"
			},
			{
				model: Usuario,
				as: "usuario"
			}
		]})

		totalPrice = somaPreco.map(el => el.dataValues.totalprice)

		const tables = carrinho.map(el => el.produto.id)

		const criaPedido = await Pedido2.create({
			UserId: p.id,
			ValorTotal: Number(totalPrice)
		})

		pedido = await Pedido2.findOne({where:{
			UserId: p.id
		},
  			order: [ [ 'createdAt', 'DESC' ]]
		})

		for await (const table of tables) {
			await PedidoDetalhes.create({
				PedidoId: pedido.id,
				UserId: p.id,
				ProdutoId: table
			})	
		}	
		Carrinho.destroy({where:{
			UserId: p.id
		}})
		req.flash('message', 'Pedido aprovado');
		res.redirect("/")
	}

}