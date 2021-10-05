'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'enderecos', 
      {
        endereco: Sequelize.DataTypes.STRING(200),
        CEP: Sequelize.DataTypes.STRING(45),
        Usuarios_id: {type: Sequelize.DataTypes.INTEGER, references: {
          model: {
            tableName: 'usuarios',
            schema: 'PIG5'
          }, key: 'id'
        }}
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
