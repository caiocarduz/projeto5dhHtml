'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'carrinhos', // table name
        'ProdutoId', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('carrinhos', 'ProdutoId')
    ]);
  },
};
