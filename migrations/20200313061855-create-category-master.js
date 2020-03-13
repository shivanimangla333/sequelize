'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CATEGORY_MASTERs', {
      CATEGORY_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CATEGORY_CODE: {
        type: Sequelize.STRING
      },
      CATEGORY_NAME: {
        type: Sequelize.STRING
      },
      SUB_CATEGORY_NAME: {
        type: Sequelize.STRING
      },
      COMPANY_ID: {
        type: Sequelize.INTEGER
      },
      COMPANY_NAME: {
        type: Sequelize.STRING
      },
      PORTFOLIO_GROUP_ID: {
        type: Sequelize.INTEGER
      },
      PORTFOLIO_GROUP_NAME: {
        type: Sequelize.STRING
      },
      PORTFOLIO_MANAGER_ID: {
        type: Sequelize.INTEGER
      },
      PORTFOLIO_MANAGER_NAME: {
        type: Sequelize.STRING
      },
      STATUS: {
        type: Sequelize.STRING
      },
      CATEGORY_ICON: {
        type: Sequelize.STRING
      },
      SUB_CATEGORY_ICON: {
        type: Sequelize.STRING
      },
      CREATED_BY: {
        type: Sequelize.INTEGER
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER
      },
      CREATEDBY_NAME: {
        type: Sequelize.STRING
      },
      UPDATEDBY_NAME: {
        type: Sequelize.STRING
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'y'
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CATEGORY_MASTERs');
  }
};