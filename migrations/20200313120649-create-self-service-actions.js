'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SELF_SERVICE_ACTIONs', {
      SELF_SERVICE_ACTION_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      ACTION: {
        type: Sequelize.STRING(500)
      },
      DESCRIPTION: {
        type: Sequelize.STRING(1500)
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
        type: Sequelize.STRING
      },
      UPDATEDBY_NAME: {
        type: Sequelize.STRING
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'Y'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SELF_SERVICE_ACTIONs');
  }
};