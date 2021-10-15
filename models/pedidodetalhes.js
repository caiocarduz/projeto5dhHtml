'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidoDetalhes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PedidoDetalhes.init({
    UserId: DataTypes.INTEGER,
    ProdutoId: DataTypes.INTEGER,
    PedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PedidoDetalhes',
  });
  return PedidoDetalhes;
};