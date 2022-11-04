'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("roles", [{
      name: "admin",
      description: "Absolute sysadmin permissions"
    }, {
      name: "user",
      description: "default user permissions"
    }])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("roles", null, {});
  }
};
