'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
      this.hasMany(models.Pagos, {
        foreignKey:"idCliente"
      });
      this.hasMany(models.Clases, {
        foreignKey:"idCliente"
      });
    }
  };
  Clientes.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};