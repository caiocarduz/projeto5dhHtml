const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs= require('fs')
const usuarios = require('../dataBase/usuarios.json')
const { validationResult } = require('express-validator')
const path = require('path');

module.exports = {
    logUser:  (req, res) => {
        

        
        res.send(errors)

    },
    createUser:  (req, res) => {
        const { email, password } = req.body;
        console.log(password)
        console.log(email)
        const user = usuarios.find( usuario => usuario.email == email);
        if(user){
            res.send( `este email ja existe `);
        }else {
            let novoUsuario = {
                email:email,
                password: password
            }

        
            usuarios.push(novoUsuario)
            // fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(novoUsuario, null, 1));
             fs.writeFileSync(path.join(__dirname, "../database/usuarios.json"), JSON.stringify(novoUsuario,null,1));
        }
        console.log(user)
        res.send("logado")
    }
} 