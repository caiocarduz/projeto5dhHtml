const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = require('../dataBase/usuarios.JSON')

module.exports = {
    logUser:  (req,res) => {
        const password = req.body.password;
        const email = req.body.email;

        const existe = users.forEach(element => {
            if(element.email == email){
                return true
            }
        });
        console.log(`password do form = ${password} email do form = ${email} variavel existe ${existe}`)
        res.send(" usuario existe")

    },
    createUser: async (req, res) => {
        const password = req.body.password;
        const user = req.body.user;
        const existe = users.forEach(element => {
            if(element.email == email){
                return true
            }
        });
        console.log(`password do form = ${password} email do form = ${email} variavel existe ${existe}`)
        res.send("logado")
    }
}