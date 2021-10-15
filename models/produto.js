'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Produto.belongsToMany(models.Carrinho, {through: models.CarrinhoProduto, unique: false, foreignKey: "ProdutoId" });
      // Produto.hasMany(models.Carrinho, {as: "produto",foreignKey: "ProdutoId"})
    }
  };
  Produto.init({
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    url: DataTypes.STRING,
    posicao: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};