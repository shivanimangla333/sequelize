'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AUDITs', {
      AUDIT_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ITEM_ID: {
        type: Sequelize.INTEGER
      },
      MODULE: {
        type: Sequelize.STRING
      },
      CREATED_ON: {
        type: Sequelize.DATE
      },
      CREATEDBY_NAME: {
        type: Sequelize.STRING
      },
      AUDIT_FIELD: {
        type: Sequelize.STRING
      },
      FROM: {
        type: Sequelize.STRING
      },
      TO: {
        type: Sequelize.STRING
      },
      CREATED_BY: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AUDITs');
  }
};