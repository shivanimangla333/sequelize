'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFGCOMP_MASTERs', {
      COMPONENT_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      COMPONENT_CODE: {
        type: Sequelize.STRING(20)
      },
      COMPONENT_NAME: {
        type: Sequelize.STRING(500)
      },
      STATUS: {
        type: Sequelize.STRING(50)
      },
      COMPONENT_TYPE: {
        type: Sequelize.STRING(50)
      },
      DESCRIPTION: {
        type: Sequelize.STRING(5000)
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      CONSUMPTION_METHOD: {
        type: Sequelize.STRING(100)
      },
      TAGS: {
        type: Sequelize.STRING(1000)
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
        defaultValue:'y'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFGCOMP_MASTERs');
  }
};