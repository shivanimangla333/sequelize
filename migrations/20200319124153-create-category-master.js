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
        type: Sequelize.STRING(30)
      },
      CATEGORY_NAME: {
        type: Sequelize.STRING(500)
      },
      SUB_CATEGORY_NAME: {
        type: Sequelize.STRING(500)
      },
      COMPANY_ID: {
        type: Sequelize.INTEGER
      },
      COMAPANY_NAME: {
        type: Sequelize.STRING(500)
      },
      PORTFOLIO_GROUP_ID: {
        type: Sequelize.INTEGER
      },
      PORTFOLIO_GROUP_NAME: {
        type: Sequelize.STRING(500)
      },
      PORTFOLIO_MANAGER_ID: {
        type: Sequelize.INTEGER
      },
      PORTFOLIO_MANAGER_NAME: {
        type: Sequelize.STRING(500)
      },
      STATUS: {
        type: Sequelize.STRING(30)
      },
      CATEGORY_ICON: {
        type: Sequelize.STRING(100)
      },
      SUB_CATEGORY_ICON: {
        type: Sequelize.STRING(100)
      },
      CREATED_BY: {
        type: Sequelize.INTEGER
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER
      },
      CREATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      UPDATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'Y'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CATEGORY_MASTERs');
  }
};