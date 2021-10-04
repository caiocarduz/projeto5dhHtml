const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs= require('fs')
// const usuarios = require('../dataBase/usuarios.json')
const {Usuario, sequelize} = require("../models");
const { body, validationResult } = require('express-validator');
const path = require('path');
const cards1 = require('../dataBase/cardsHome.json')
const cards2 = require('../dataBase/cards2Home.json')


module.exports = {
    logUser:  async (req, res) => {
        const email = req.body.email.toString()
        const password = req.body.password.toString()
        const listaDeErrors = validationResult(req);
        if (!listaDeErrors.isEmpty()) {
          /*   req.flash('errors', errors.array())
            console.log(errors) */
            res.render('login', {errors: listaDeErrors.errors});
        }

        // const usuario = usuarios.find( u => u.email == email)
        const usuario = await Usuario.findOne({ where: { email: email} });
        console.log(usuario)
        // req.session.user = usuario
        // req.session.save();
        // console.log(req.session.user)

        if(usuario === null){
            // req.session.destroy();
            res.redirect("/login?error=usuarioInexistente")
            
        } else  if (!bcrypt.compareSync(password , usuario.senha)){
            // req.session.destroy();
            res.redirect("/login?error=senhaIncorreta")
        } else{
            req.session.user = usuario
            req.session.save();
            console.log(req.session.user)
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
    createUser:  async (req, res) => {
        

        const { email, password } = req.body;
        const listaDeErrors = validationResult(req);
        if (!listaDeErrors.isEmpty()) {
            res.render('login', {errors1: listaDeErrors.errors});
        }
        const SenhaHash = bcrypt.hashSync(password, saltRounds)
        const usuario = await Usuario.findOne({ where: { email: email} });
        if(usuario !== null){
            res.redirect("/login?error=usuariojaexiste")
        }else {
            let novoUsuario = {
                nome:email.toString(),
                email:email.toString(),
                senha: SenhaHash,
            }

            await Usuario.create(novoUsuario)
            req.session.user = novoUsuario
            console.log(req.session.user)
            res.redirect('/home')
            }

        
    }
} 