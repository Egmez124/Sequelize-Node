'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horarios_Instructores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Horarios_Instructores.init({
    idHorario: DataTypes.INTEGER,
    idInstructores: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Horarios_Instructores',
  });
  return Horarios_Instructores;
};