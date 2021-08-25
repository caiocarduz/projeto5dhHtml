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
            res.send('user nao ta retornando true')
        }
        
        

    },
    createUser:  (req, res) => {
        const { email, password } = req.body;
        console.log(password)
        console.log(email)
        const user = usuarios.find( user => user.email == email && user.password == password)
        
        if(user){
            res.send( `este email ja existe `);
        }else {
            let novoUsuario = {
                nome:email,
                email:email,
                password: password,
                clearance: "usuarioComum"
            }

        
            usuarios.push(novoUsuario)
            // fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(novoUsuario, null, 1));
             fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(novoUsuario,null,1));
             console.log(user)
             res.send(usuarios)
            }

        
    }
} 