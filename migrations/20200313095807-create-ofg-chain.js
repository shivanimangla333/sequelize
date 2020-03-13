'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_CHAINs', {
      CHAIN_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      CHAIN_TYPE: {
        type: Sequelize.STRING(50)
      },
      CHAIN_COMPANY_ID: {
        type: Sequelize.INTEGER
      },
      CHAIN_COMPANY: {
        type: Sequelize.STRING(500)
      },
      CHAIN_GROUP_ID: {
        type: Sequelize.INTEGER
      },
      CHAIN_GROUP_NAME: {
        type: Sequelize.STRING(500)
      },
      CHAIN_PERSON_ID: {
        type: Sequelize.INTEGER
      },
      CHAIN_PERSON_NAME: {
        type: Sequelize.STRING(500)
      },
      CHAIN_PERSON_EMAIL: {
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
        type: Sequelize.STRING(100)
      },
      UPDATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'y'
      },
      AMS_CREATE_ID: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      AMS_EDIT_ID: {
        type: Sequelize.INTEGER,
        defaultValue: null
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_CHAINs');
  }
};