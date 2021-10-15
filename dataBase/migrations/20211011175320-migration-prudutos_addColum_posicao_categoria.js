'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'produtos', // table name
        'posicao', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'produtos',
        'categoria',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('produtos', 'posicao'),
      queryInterface.removeColumn('produtos', 'categoria')
    ]);
  },
};

