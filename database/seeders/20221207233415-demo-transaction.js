'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'transactions',
      [
        { id: 1, description: 'transactions effected ', amount: 1300, userId: 1, categoryId: 1 },
        { id: 2, description: 'transactions effected ', amount: 1150, userId: 1, categoryId: 2 },
        { id: 3, description: 'transactions effected ', amount: 2500, userId: 2, categoryId: 1 },
        { id: 4, description: 'transactions effected ', amount: 2800, userId: 2, categoryId: 2 },
        { id: 5, description: 'transactions effected ', amount: 3400, userId: 3, categoryId: 1 },
        { id: 6, description: 'transactions effected ', amount: 3100, userId: 3, categoryId: 2 },
        { id: 7, description: 'transactions effected ', amount: 4700, userId: 4, categoryId: 1 },
        { id: 8, description: 'transactions effected ', amount: 4300, userId: 4, categoryId: 2 },
        { id: 9, description: 'transactions effected ', amount: 5650, userId: 5, categoryId: 1 },
        { id: 10, description: 'transactions effected ', amount: 5100, userId: 5, categoryId: 2 },
        { id: 11, description: 'transactions effected ', amount: 6460, userId: 6, categoryId: 1 },
        { id: 12, description: 'transactions effected ', amount: 6300, userId: 6, categoryId: 2 },
        { id: 13, description: 'transactions effected ', amount: 7900, userId: 7, categoryId: 1 },
        { id: 14, description: 'transactions effected ', amount: 7200, userId: 7, categoryId: 2 },
        { id: 15, description: 'transactions effected ', amount: 8300, userId: 8, categoryId: 1 },
        { id: 16, description: 'transactions effected ', amount: 8600, userId: 8, categoryId: 2 },
        { id: 17, description: 'transactions effected ', amount: 9378, userId: 9, categoryId: 1 },
        { id: 18, description: 'transactions effected ', amount: 9110, userId: 9, categoryId: 2 },
        { id: 19, description: 'transactions effected ', amount: 10789, userId: 10, categoryId: 1 },
        { id: 20, description: 'transactions effected ', amount: 10999, userId: 10, categoryId: 2 },
      ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  },
};
