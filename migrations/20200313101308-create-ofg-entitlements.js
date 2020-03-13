'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_ENTITLEMENTs', {
      ENTITLEMENT_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ENTITLEMENT_CODE: {
        type: Sequelize.STRING(20)
      },
      ENTITLEMENT_FOR: {
        type: Sequelize.STRING(100)
      },
      ENTITLEDENTITY_ID: {
        type: Sequelize.INTEGER
      },
      ENTITLEMENT_ENTITY: {
        type: Sequelize.STRING(100)
      },
      ENTITLED_TO: {
        type: Sequelize.STRING(50)
      },
      ENTITLEMENT_TYPE: {
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
      ENTITLED_TO_ID: {
        type: Sequelize.INTEGER
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue:'y'
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_ENTITLEMENTs');
  }
};