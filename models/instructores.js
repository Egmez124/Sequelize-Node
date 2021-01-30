'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructores extends Model {
    
    static associate(models) {
      this.belongsTo(models.Clases, {
        foreignKey: "id"
      });
      this.belongsToMany(models.Horarios, {
        through: "Horarios_Instructores",
        foreignKey: "idHorario"
      });
    }
  };
  Instructores.init({
    idClase: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instructores',
  });
  return Instructores;
};