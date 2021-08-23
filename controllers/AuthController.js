const bcrypt = require('bcrypt');
const saltRounds = 10;
const users = require('../dataBase/usuario.JSON')

module.exports = {
    logUser:  (req,res) => {
        const password = req.body.password;
        const email = req.body.email;
        const existe = users.find(usuario => {
            return usuario.email
        })
        console.log(`password do form = ${password} email do form = ${email} variavel existe ${existe}`)


    },
    createUser: async (req, res) => {
        const password = req.body.password;
        const user = req.body.user;
    }
}