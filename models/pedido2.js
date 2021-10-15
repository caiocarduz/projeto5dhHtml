'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pedido2.init({
    UserId: DataTypes.INTEGER,
    ValorTotal: DataTypes.DECIMAL

  }, {
    sequelize,
    modelName: 'Pedido2',
  });
  return Pedido2;
};