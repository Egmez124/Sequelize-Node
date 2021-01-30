'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membrecia extends Model {
    static associate(models) {
      this.belongsTo(models.Clientes, {
        foreignKey:"id"
      });
      this.belongsTo(models.Clientes,{
        foreignKey:"idCliente"
      });
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