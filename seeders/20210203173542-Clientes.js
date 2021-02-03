'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Clientes', [{
      nombre: 'Edgar',
      apellido: 'lopez',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});

  await queryInterface.bulkInsert('Clientes', [{
      nombre: 'Ana',
      apellido: 'Belem',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
