const {Carrinho, Produto, CarrinhoProduto, sequelize} = require("../models");
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
		const carrinho = await Carrinho.findOne({where:{
			UserId: req.session.user.id
		}})
		console.log(req.session.user.id)
		const prod = await Produto.findOne({where:{
			id: req.cookies.carrinho.id 
		}})
		console.log(prod.id)
		const carrinhoProduto = await CarrinhoProduto.create({ProdutoId: prod.id,
		CarrinhoId: carrinho.id})

		const p = await Carrinho.findAll({where:{
			UserId: req.session.user.id
		},
		include: Produto
		 })
		 const pProdutos = p.map(x => x.Produtos)
		 const prodCarrinhos = (pProdutos[0])
		 console.log(prodCarrinhos)
		 res.render("pedido", {pedidos: prodCarrinhos})

		// res.json(prodCarrinhos)
	}

}