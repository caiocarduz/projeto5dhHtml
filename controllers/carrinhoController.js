

module.exports = {
	carrinho: (req, res) => {
		res.render("carrinho", {logged_user : req.session.user});
	}
}