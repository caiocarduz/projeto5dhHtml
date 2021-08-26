const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs= require('fs')
const usuarios = require('../dataBase/usuarios.json')
const { validationResult } = require('express-validator')
const path = require('path');

module.exports = {
    logUser:  (req, res) => {
        console.log('entrou na requisicao')
        const { email, password } = req.body;
        console.log( email, password)
        const user = usuarios.find( user => user.email == email && user.password == password)
        
        if(user){
            req.session.user = {nome: user.nome, email: user.email}
            res.send('<h1>logado</h1>')
        } else {
            res.send('user nao existe no banco de dados')
        }
        
        

    },
    createUser:  (req, res) => {
        const { email, password } = req.body;
        console.log(password)
        console.log(email)
        const user = usuarios.find( user => user.email == email && user.password == password)
        
        if(user){
            res.send( `este email ja existe favor fazer login UMA IDEIA é REDIRECIONAR PARA UMA PAGINA ONDE SO TEM O CAMPO DE LOGIN`);
        }else {
            let novoUsuario = {
                nome:email,
                email:email,
                password: password,
                clearance: "usuarioComum"
            }

        
            usuarios.push(novoUsuario)
            // fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(novoUsuario, null, 1));
             fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(usuarios,null,1));
             console.log(user)
             res.send(usuarios)
            }

        
    }
} 