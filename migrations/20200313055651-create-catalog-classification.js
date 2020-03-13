'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CATALOG_CLASSIFICATIONs', {
      C_CLASS_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      C_CLASS: {
        type: Sequelize.STRING,
        allowNull: false
      },
      C_SUBCLASS: {
        type: Sequelize.STRING,
        allowNull: false
      },
      COMPANY_NAME: {
        type: Sequelize.STRING,
        allowNull: false
      },
      COMPANY_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ACTIVE: {
        type: Sequelize.STRING,
        defaultValue:"ACTIVE"
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CATALOG_CLASSIFICATIONs');
  }
};