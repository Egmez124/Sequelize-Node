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
   await queryInterface.bulkInsert('Pagos', [{
    fecha: new Date(),
    monto: 400,
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
  
    // await queryInterface.bulkInsert('Pagos', [{
    //   idCliente: 3,
    //   idMembrecia: 1,
    //   fecha: new Date(),
    //   monto: 300,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    //   }], {});
  
    //   await queryInterface.bulkInsert('Pagos', [{
    //     idCliente: 3,
    //     idMembrecia: 3,
    //     fecha: new Date(),
    //     monto: 600,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //     }], {});
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
