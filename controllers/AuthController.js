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
            res.redirect("/login?error=1")
        }
        const usuario = usuarios.find( u => u.email == email)
        req.session.logged_user = usuario
        console.log(usuario)
        if(typeof(usuario) === "undefined"){
            res.redirect("/login?error=usuarioInixistente")
            
        } else  if (!bcrypt.compareSync(password , usuario.password)){
            res.redirect("/login?error=senhaIncorreta")
        } else{
            res.redirect("/home")
        }
    },
    createUser:  (req, res) => {
        
    
        const erros = validationResult(req);
        const { email, password } = req.body;
        const SenhaHash = bcrypt.hashSync(password, saltRounds)
        console.log(password)
        console.log(email)
        const user = usuarios.find( user => user.email == email && user.password == password)
        
        if(user){
            res.render('loginJaExiste', {erros});
        }else {
            let novoUsuario = {
                nome:email,
                email:email,
                password: SenhaHash,
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