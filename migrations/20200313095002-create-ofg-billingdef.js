'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_BILLINGDEFs', {
      BILLINGDEF_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BILLINGDEF_TYPE: {
        type: Sequelize.STRING(50)
      },
      PARENT_ID: {
        type: Sequelize.INTEGER
      },
      PRICE: {
        type: Sequelize.DOUBLE
      },
      BASE_CURRENCY: {
        type: Sequelize.STRING(100)
      },
      BILLING_METHOD: {
        type: Sequelize.STRING(100)
      },
      CREATED_BY: {
        type: Sequelize.INTEGER
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      CREATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      UPDATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'y'
      },
      BASE_CURRENCY_VALUE: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_BILLINGDEFs');
  }
};