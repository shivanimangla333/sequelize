'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('KNOWLEDGE_MASTERs', {
      KNOW_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      KNOW_CODE: {
        type: Sequelize.STRING(20)
      },
      TITLE: {
        type: Sequelize.STRING(500)
      },
      KNOW_TYPE: {
        type: Sequelize.STRING(100)
      },
      KNOW_CONTENT_TYPE: {
        type: Sequelize.STRING(100)
      },
      KNOW_CONTENT: {
        type: Sequelize.STRING(5000)
      },
      KNOW_PARENT_ID: {
        type: Sequelize.INTEGER
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
      KNOW_PARENT_TYPE: {
        type: Sequelize.STRING(100)
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'y'
      },
      DISCOVERY_DOC_ID: {
        type: Sequelize.STRING,
        defaultValue: null
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('KNOWLEDGE_MASTERs');
  }
};