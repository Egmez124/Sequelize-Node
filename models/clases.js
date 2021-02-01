'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clases extends Model {
    static associate(models) {
      this.belongsTo(models.Clientes, {
        foreignKey:"idCliente"
      });
      this.hasMany(models.Horarios, {
        foreignKey:"idClase"
      });
    }
  };
  Clases.init({
    idCliente: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clases',
  });
  return Clases;
};