'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MENULISTs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MODULE: {
        type: Sequelize.STRING
      },
      FIELD1_NAME: {
        type: Sequelize.STRING
      },
      FIELD1_KEY: {
        type: Sequelize.STRING
      },
      FIELD1_VALUE: {
        type: Sequelize.STRING(1000)
      },
      FIELD2_NAME: {
        type: Sequelize.STRING
      },
      FIELD2_KEY: {
        type: Sequelize.STRING
      },
      FIELD2_VALUE: {
        type: Sequelize.STRING(1000)
      },
      FIELD3_NAME: {
        type: Sequelize.STRING
      },
      FIELD3_KEY: {
        type: Sequelize.STRING
      },
      FIELD3_VALUE: {
        type: Sequelize.STRING(1000)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MENULISTs');
  }
};