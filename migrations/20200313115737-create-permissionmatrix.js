'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PERMISSIONMATRices', {
      PER_MAT_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ROLE_ID: {
        type: Sequelize.INTEGER
      },
      ROLE_NAME: {
        type: Sequelize.STRING
      },
      OPERATION: {
        type: Sequelize.STRING
      },
      REGEX: {
        type: Sequelize.STRING(1000)
      },
      HTTP_GET: {
        type: Sequelize.INTEGER
      },
      HTTP_POST: {
        type: Sequelize.INTEGER
      },
      HTTP_PATCH: {
        type: Sequelize.INTEGER
      },
      HTTP_DELETE: {
        type: Sequelize.INTEGER
      },
      DESCRIPTION: {
        type: Sequelize.STRING(1000)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PERMISSIONMATRices');
  }
};