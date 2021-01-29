'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membrecia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Membrecia.init({
    idCliente: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    plazo: DataTypes.STRING,
    costo: DataTypes.INTEGER,
    vigencia: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Membrecia',
  });
  return Membrecia;
};