'use strict';
import { QueryInterface } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.bulkInsert('Products', [
      {
        item_name: 'Shirts',
        quantity_in_stock: 100,
        quantity_sold: 0,
        price: 9.99,
      },
    ]);
  },
  async down(queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.bulkDelete('Products', {}, {});
  },  
};