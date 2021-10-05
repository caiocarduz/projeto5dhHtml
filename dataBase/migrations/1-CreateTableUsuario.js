'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable(
    'usuarios',
    {
      nome: Sequelize.DataTypes.STRINGS(45),
      email: {type:Sequelize.DataTypes.STRINGS(45), alloNull:false},
      senha: Sequelize.DataTypes.STRINGS(256),
      createdAt: Sequelize.DataTypes.DATETIME,
      updatedAt: Sequelize.DataTypes.DATETIME

    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
