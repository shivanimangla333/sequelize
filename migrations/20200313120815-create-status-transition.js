'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('STATUS_TRANSITIONs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FROM_STATUS: {
        type: Sequelize.STRING(100)
      },
      TO_STATUS: {
        type: Sequelize.STRING(100)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('STATUS_TRANSITIONs');
  }
};