const {Carrinho, Produto, CarrinhoProduto, sequelize} = require("../models");
const { Op } = require("sequelize");
module.exports = {
	carrinho:(req, res) => {
		produtoId = req.cookies.carrinho.id
		console.log(produtoId)
		Carrinho.create({UserId: req.session.user.id, ProdutoId: produtoId}).then(() => {
			// Carrinho.reload()
			res.redirect("/pedido")
		}).catch((error) => {
			res.status(404).redirect("/home")
		})
	},
	pedido: async (req, res) => {
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
		include: Produto
		 })

		 const pProdutos = p.map(el => el.Produto)
		//  const prodCarrinhos = (pProdutos.flat())
		//  console.log(prodCarrinhos)
		// // res.redirect("/pedido/descricao")
		 res.render("pedido", {pedidos: pProdutos, logged_user : req.session.user})
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
			idCarrinho = await Carrinho.findOne({where: {
				Userid: req.session.user.id
			}})
			await Carrinho.destroy( {where:{
				[Op.and]:[
					{ProdutoId: req.body.id },
					{UserId:  req.session.user.id}
	
				]
			}})

			// await CarrinhoProduto.destroy({where:{
			// 	CarrinhoId : idCarrinho.id
			// }})

			res.redirect("/")

		} catch(e){
			console.log(e)
		}

	}

}