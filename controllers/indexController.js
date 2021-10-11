
const cards1 = require('../dataBase/cardsHome.json')
const cards2 = require('../dataBase/cards2Home.json')
const detalhes = require('../dataBase/produtoDetalhes.json')
const {Produto, sequelize} = require("../models");
module.exports = {
    home: async (req, res) =>{
        const cards2 = await Produto.findAll();
        console.log(cards2)
        res.render('home', {cards1, cards2, logged_user : req.session.user});
        
    },
    produtos: (req,res) => {
        res.render('produtos',{logged_user : req.session.user})
    },

    login: (req, res) =>{
        res.render('login' )
    },
    produtoDetalhes: async (req, res) =>{
        console.log(req.params.id)
        const p = await Produto.findByPk(req.params.id);
        console.log(p)
        res.render('produtoDetalhes',{p:p, logged_user : req.session.user, detalhes})
    }

}