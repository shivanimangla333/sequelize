'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_PERFORMANCE_TARGERTs', {
      PERFORMANCE_TARGERT_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      GOAL_TYPE: {
        type: Sequelize.STRING(500)
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
      },
      SUPPORT_TYPE: {
        type: Sequelize.STRING(500)
      },
      PRIORITY: {
        type: Sequelize.STRING(20)
      },
      GOAL_DURATION: {
        type: Sequelize.INTEGER
      },
      GOAL_DURATION_UNIT: {
        type: Sequelize.STRING(20)
      },
      WORKING_HOURS_START: {
        type: Sequelize.STRING(20)
      },
      WORKING_HOURS_END: {
        type: Sequelize.STRING(20)
      }
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_PERFORMANCE_TARGERTs');
  }
};