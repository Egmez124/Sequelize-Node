'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horarios_Instructores extends Model {
    static associate(models) {
      // this.belongsTo(models.Horarios, {
      //   foreignKey: "idHorario"
      // });
      // this.belongsTo(models.Instructores,{
      //   foreignKey: "idInstructor"
      // });
    }
  };
  Horarios_Instructores.init({
    idHorario: DataTypes.INTEGER,
    idClase: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Horarios_Instructores',
  });
  return Horarios_Instructores;
};