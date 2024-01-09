'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        item_name: 'Shirts',
        quantity_in_stock: 100,
        quantity_sold: 0,
        price: 9.99
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete.apply('Products', null, {})
  }
};