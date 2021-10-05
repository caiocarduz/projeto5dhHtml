'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'carrinhho',
      {
        Usuarios_id:{
          type: Sequelize.DataTypes.INTEGER, references:{
            model:{
              tableName:'usuarios',
              schema: 'PIG5'
            }, key: 'id'
          }
        },
        Produtos_id:{
          type: Sequelize.DataTypes.INTEGER, references:{
            model:{
              tableName:'produtos',
              schema: 'PIG5'
            },key: 'id'
          }
        }
      }
    )
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('carrinho')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
