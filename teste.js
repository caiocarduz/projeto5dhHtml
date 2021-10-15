const { Usuario, sequelize } = require('../database/models');

Usuario.findByPk(1, {include:['contatos','colegas']}).then(
    u => {
        console.log(u.toJSON());
        sequelize.close();
    }
);