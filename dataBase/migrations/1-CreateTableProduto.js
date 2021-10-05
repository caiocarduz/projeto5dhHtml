'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'produtos',
      {
        nome: Sequelize.DataTypes.STRING(200),
        preco: Sequelize.DataTypes.DECIMAL,
        quantidade: Sequelize.DataTypes.INTEGER,
        createdAt: Sequelize.DataTypes.DATETIME,
        updatedAt: Sequelize.DataTypes.DATETIME,
        categoria: Sequelize.DataTypes.STRING(45)
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
    return queryInterface.dropTable('produtos')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
