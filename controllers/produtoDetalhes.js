const detalhes = require('../dataBase/produtoDetalhes.json')

module.exports = {
    detalhes: (req, res)=>{
        res.render('produtoDetalhes', {detalhes})
    }
}