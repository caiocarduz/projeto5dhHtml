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
            res.render('login', {errors: listaDeErrors.errors});
        }
        const usuario = await Usuario.findOne({ where: { email: email} });    
        if (bcrypt.compareSync(password , usuario.senha)){
            req.session.user = usuario
            req.session.save();
            res.redirect("/home")
        }
    },

    logout: (req, res) =>{
        req.session.destroy();
        res.redirect("/home")

    },
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
                nome:email,
                email:email,
                senha: SenhaHash,
            }
           
            await Usuario.create(novoUsuario)
            const usuario = await Usuario.findOne( {where: {
                email : novoUsuario.email
            }})
            req.session.user = usuario
            req.session.save();
            res.redirect('/home')
            } 
    }
} 