const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs= require('fs')
const usuarios = require('../dataBase/usuarios.json')
const { validationResult } = require('express-validator')
const path = require('path');
const cards1 = require('../dataBase/cardsHome.json')
const cards2 = require('../dataBase/cards2Home.json')

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
        req.session.user = usuario
        console.log(req.session.user)
        req.session.save();
        if(typeof(usuario) === "undefined"){
            res.redirect("/login?error=usuarioInexistente")
            
        } else  if (!bcrypt.compareSync(password , usuario.password)){
            res.redirect("/login?error=senhaIncorreta")
        } else{
            res.redirect("/home")
        }
    },

    logout: (req, res) =>{
        req.session.destroy();
        res.redirect("/home")

    },

    // userView: (req, res, next) =>{
    //     console.log(req.session.user)
    //     res.render('home', {cards1, cards2, logged_user : req.session.user})
    // },
    createUser:  (req, res) => {
        
    
        const erros = validationResult(req);
        const { email, password } = req.body;
        const SenhaHash = bcrypt.hashSync(password, saltRounds)
        console.log(password)
        console.log(email)
        const user = usuarios.find( user => user.email == email && user.password == password)
        console.log(user)
        req.session.user = {
            nome: email,
            email: email,
            senha: SenhaHash,
            clearence: "usuarioComum"
        }
        console.log(req.session.user)
        req.session.save();
        
        if(typeof(user) !== undefined){
            res.redirect("/login?error=usuariojaexiste")
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
             res.redirect('/home')
            }

        
    }
} 