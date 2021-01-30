'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    static associate(models) {
      this.belongsTo(models.Clientes, {
        foreignKey: "id"
      });
    }
  };
  Pago.init({
    idCliente: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pago',
  });
  return Pago;
};