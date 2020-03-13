'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CAT_MASTERs', {
      CATEGORY_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CATEGORY: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SUB_CATEGORY: {
        allowNull: false,
        type: Sequelize.STRING
      },
      COMPANY_NAME: {
        allowNull: false,
        type: Sequelize.STRING
      },
      COMPANY_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ACTIVE: {
        type: Sequelize.STRING(10),
        defaultValue: "ACTIVE"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CAT_MASTERs');
  }
};