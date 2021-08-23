const bcrypt = require('bcrypt');
const saltRounds = 10;
const usuario = require('../dataBase/usuarios.JSON')
const {  validationResult } = require('express-validator')

module.exports = {
    logUser:  (req,res) => {
        let existe = false;
        let senhaCorreta = false;
        var usuario = {
            senha: req.body.senha,
            email: req.body.email
        }
        for(let usuarioCadastrado of usuarios){
            if(usuarioCadastrado.email == usuario.email){
                existe = true;
            } 
        }
        for(let usuarioCadastrado of usuarios){
            if(usuarioCadastrado.senha == usuario.senha){
                senhaCorreta = true;  
            } 
        }
        if(existe && senhaCorreta){
            res.send('tu és o grande animal de fato')
            
        }

        
        res.send(errors)

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