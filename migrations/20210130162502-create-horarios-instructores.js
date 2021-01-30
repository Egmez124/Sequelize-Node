'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Horarios_Instructores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idHorario: {
        type: Sequelize.INTEGER,
        references: {
          model: "Horarios",
          key: "id"
        }
      },
      idInstructores: {
        type: Sequelize.INTEGER,
        references: {
          model:"Instructores",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Horarios_Instructores');
  }
};