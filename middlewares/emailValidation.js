const { check } = require('express-validator')
const {Usuario, sequelize} = require("../models");
module.exports = {
  
    validateEmail: check('email')
  
        // To delete leading and triling space
        .trim()
  
        // Normalizing the email address
        .normalizeEmail()
  
        // Checking if follow the email 
        // address formet or not
        .isEmail()
  
        // Custom message
        .withMessage('Email inválido')
  
        // Custom validation
        // Validate email in use or not
        .custom(async (email) => {
            const existingUser = 
                await Usuario.findOne({ where: { email: email} })
                  
            if (existingUser) {
                throw new Error('Email já existe.')
            }
        })
}