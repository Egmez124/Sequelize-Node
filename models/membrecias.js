'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membrecias extends Model {
    static associate(models) {
      // this.hasOne(models.Clientes,{
      //   foreignKey:"idCliente"
      // });
    }
  };
  Membrecias.init({
    idCliente: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN,
    costo: DataTypes.INTEGER,
    vigencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Membrecias',
  });
  return Membrecias;
};