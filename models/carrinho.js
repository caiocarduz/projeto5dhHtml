'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrinho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Carrinho.belongsToMany(models.Produto, {through:models.CarrinhoProduto, unique: false , foreignKey:"CarrinhoId" });
      Carrinho.belongsTo(models.Produto, {as: "produto"});
      Carrinho.belongsTo(models.Usuario, {as: "usuario", foreignKey: "UserId"})
    }
  };
  Carrinho.init({
    UserId: DataTypes.INTEGER,
    ProdutoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrinho',
  });
  return Carrinho;
};