
const cards1 = require('../dataBase/cardsHome.json')
const cards2 = require('../dataBase/cards2Home.json')
module.exports = {
    home: (req, res) =>{
        res.render('home', {cards1, cards2});
        
    },
    produtos: (req,res) => {
        res.render('produtos')
    },

    login: (req, res) =>{
        res.render('login' )
    }

}