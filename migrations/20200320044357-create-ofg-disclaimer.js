'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_DISCLAIMERs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      APPROVER_DISCLAIMER: {
        type: Sequelize.STRING(5000)
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      SERVICE_DISCLAIMER: {
        type: Sequelize.STRING(5000)
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'Y'
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
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
      }      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_DISCLAIMERs');
  }
};