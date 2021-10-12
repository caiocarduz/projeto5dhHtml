const {Carrinho, Produto, sequelize} = require("../models");
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
		const produto = await Carrinho.findAll( {where:{
			UserId: req.session.user.id
		}})
		res.json(produto)
	}

}