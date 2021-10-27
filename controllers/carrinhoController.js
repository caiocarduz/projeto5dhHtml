const {Carrinho, Produto, Usuario, Pedido2, PedidoDetalhes, CarrinhoProduto, sequelize} = require("../models");
const { Op } = require("sequelize");


// const Usuario = require("../models/Usuario");
module.exports = {
	carrinho:(req, res) => {
		produtoId = req.cookies.carrinho.id
		console.log(produtoId)
		const carrinho = Carrinho.create({UserId: req.session.user.id, ProdutoId: produtoId}).then(() => {
			// Carrinho.reload()

			res.redirect("/pedido")
		}).catch((error) => {
			res.status(404).redirect("/home")
		})
	},
	pedido: async (req, res, next) => {
		// const carrinho = await Carrinho.findOne({where:{
		// 	ProdutoId: req.cookies.carrinho.id 
		// }})
		// console.log(req.session.user.id)
		// const prod = await Produto.findOne({where:{
		// 	id: req.cookies.carrinho.id 
		// }})
		// console.log(prod.id)
		// const carrinhoProduto = await CarrinhoProduto.create({ProdutoId: prod.id,
		// CarrinhoId: carrinho.id})
		// res.clearCookie("carrinho");

		const p = await Carrinho.findAll({where:{
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

		 const pProdutos = p.map(el => el.Produto)
		//  const prodCarrinhos = (pProdutos.flat())
		//  console.log(prodCarrinhos)
		// // res.redirect("/pedido/descricao")
		 res.render("pedido", {pedidos: p, logged_user : req.session.user})
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
		const data = {
			UserId: p.id,
			ValorTotal: 2.3,
		}

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

		const tables = carrinho.map(el => el.produto.id)
		console.log(tables)

		const criaPedido = await Pedido2.create({
			UserId: p.id,
			ValorTotal: 5.6
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