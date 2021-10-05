'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'pedidos',
      {
        total: Sequelize.DataTypes.DECIMAL,
        endereco_de_entrega: Sequelize.DataTypes.STRINGS(200),
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
        },
        Pagamentos_id:{
          type: Sequelize.DataTypes.INTEGER, references:{
            model: {
              tableName: 'pagamentos',
              schema: 'PIG5'
            }, key: 'id'
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
