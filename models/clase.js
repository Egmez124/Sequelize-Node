'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clase extends Model {
    static associate(models) {
      this.belongsTo(models.Clientes, {
        foreignKey:"id"
      });
      this.hasMany(models.Horarios, {
        foreignKey:"idClase"
      });
    }
  };
  Clase.init({
    idCliente: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clase',
  });
  return Clase;
};