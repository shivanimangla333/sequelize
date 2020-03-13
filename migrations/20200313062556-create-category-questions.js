'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CATEGORY_QUESTIONs', {
      CATEGORY_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CATEGORY_NAME: {
        type: Sequelize.STRING,
        allowNull: false
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      CATEGORY_STATUS: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CATEGORY_SEQUENCE: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'y'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CATEGORY_QUESTIONs');
  }
};