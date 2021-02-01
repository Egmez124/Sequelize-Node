'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horarios extends Model {
    static associate(models) {
      this.belongsTo(models.Clases, {
        foreignKey: "idClase"
      });
      this.belongsToMany(models.Instructores, {
        through:"Horarios_Instructores",
        foreignKey:"idInstructor"
      });
    }
  };
  Horarios.init({
    idClase: DataTypes.INTEGER,
    hora: DataTypes.TIME,
    dia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Horarios',
  });
  return Horarios;
};