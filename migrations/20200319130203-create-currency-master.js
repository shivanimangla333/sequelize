'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CURRENCY_MASTERs', {
      CURRENCY_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CURRENCY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      CURRENCY_VALUE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CREATED_ON: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      CREATEDBY_NAME: {
        type: Sequelize.STRING(500)
      },
      CREATED_BY: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CURRENCY_MASTERs');
  }
};