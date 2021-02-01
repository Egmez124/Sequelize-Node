'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagos extends Model {
    static associate(models) {
      this.belongsTo(models.Clientes, {
        foreignKey: "idCliente"
      });
    }
  };
  Pagos.init({
    idCliente: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    monto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pagos',
  });
  return Pagos;
};