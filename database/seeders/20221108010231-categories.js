'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'incomes',
        description: 'income transactions',
      },
      { 
        id: 2,
        name: 'outcomes',
        description: 'outcome transactions',
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
