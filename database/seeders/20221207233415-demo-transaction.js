'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'transactions',
      [
        {
          description: 'transaccion efectuada por usuario',
          amount: 1350,
          userId: 1,
          categoryId: 1,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 2500,
          userId: 2,
          categoryId: 2,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 5000,
          userId: 3,
          categoryId: 3,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 4300,
          userId: 4,
          categoryId: 4,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 5356,
          userId: 5,
          categoryId: 5,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 6123,
          userId: 6,
          categoryId: 6,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 7359,
          userId: 7,
          categoryId: 7,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 8600,
          userId: 8,
          categoryId: 8,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 9340,
          userId: 9,
          categoryId: 9,
        },
        {
          description: 'transaccion efectuada por usuario',
          amount: 10699,
          userId: 10,
          categoryId: 10,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('transactions', null, {});
  },
};
