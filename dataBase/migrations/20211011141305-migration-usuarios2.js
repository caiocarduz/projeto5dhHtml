'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('usuarios', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        senha: {
          type: Sequelize.STRING(11),
          allowNull: false
        }
      })
      /**
       * Add altering commands here.
       *
       * Example:
       * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
       */
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('usuarios');
    }
 
};
