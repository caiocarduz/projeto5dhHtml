
module.exports = {
    home: (req, res) =>{
        res.render('home');
    },
    produtos: (req,res) => {
        res.render('produtos')
    },

    login: (req, res) =>{
        res.render('login')
    }

}