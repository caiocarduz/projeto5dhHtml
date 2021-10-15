'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'produtos', // table name
        'url', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'produtos',
        'preco',
        {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('produtos', 'url'),
      queryInterface.removeColumn('produtos', 'preco')
    ]);
  },
};
