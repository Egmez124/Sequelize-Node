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
   await queryInterface.bulkInsert('Membrecias', [{
    nombre: 'Iron',
    activo: true,
    costo: 300,
    vigencia: '3 meses',
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Membrecias', [{
      nombre: 'Gold',
      activo: true,
      costo: 400,
      vigencia: '6 meses',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});

      await queryInterface.bulkInsert('Membrecias', [{
        nombre: 'Platinum',
        activo: true,
        costo: 600,
        vigencia: '1 año',
        createdAt: new Date(),
        updatedAt: new Date()
        }], {});
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
