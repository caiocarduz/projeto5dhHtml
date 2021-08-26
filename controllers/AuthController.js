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
        try {
            validationResult(req).throw();
            // Oh look at ma' success! All validations passed!
        } catch (err) {
            console.log(err.mapped()); // Oh noes!
            const erros = validationResult(req);
            //se tiver erros manda de volta o erro
            res.send(erros)
        }
        const usuario = usuarios.find( usuario => usuario.email == email && usuario.password == password)
        console.log(usuario)
        if(usuario != undefined){
            req.session.usuario = {nome: usuario.nome, email: usuario.email}
            res.send('<h1>logado</h1>')
        } else {
            res.send('user nao existe no banco de dados')
        }
        
        

    },
    createUser:  (req, res) => {
        
    
        const erros = validationResult(req);
        const { email, password } = req.body;
        console.log(password)
        console.log(email)
        const user = usuarios.find( user => user.email == email && user.password == password)
        
        if(user){
            res.render('loginJaExiste', {erros});
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
             res.render('produtos', {menssagem:"Usuario criado corretamente"})
            }

        
    }
} 