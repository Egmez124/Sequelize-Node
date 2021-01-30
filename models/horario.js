'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horario extends Model {
    static associate(models) {
      this.belongsTo(models.Clases, {
        foreignKey: "id"
      });
      this.belongsToMany(models.Instructores, {
        through:"Horarios_Instructores",
        foreignKey:"idInstructores"
      });
    }
  };
  Horario.init({
    idClase: DataTypes.INTEGER,
    time: DataTypes.TIME,
    dia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Horario',
  });
  return Horario;
};