'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_FULFILMENT_PLANs', {
      FPLAN_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FPLAN_DEF_TYPE: {
        type: Sequelize.STRING(50)
      },
      FPLAN_ENTITYID: {
        type: Sequelize.INTEGER
      },
      FPLAN_TEXT: {
        type: Sequelize.STRING(500)
      },
      FPLAN_DESC: {
        type: Sequelize.STRING(3200)
      },
      FPLAN_EXETYPE: {
        type: Sequelize.STRING(50)
      },
      FPLAN_SEQUENCE: {
        type: Sequelize.STRING(50)
      },
      FPLAN_COMPANY_ID: {
        type: Sequelize.INTEGER
      },
      FPLAN_COMPANY_NAME: {
        type: Sequelize.STRING(50)
      },
      FPLAN_GROUP_ID: {
        type: Sequelize.INTEGER
      },
      FPLAN_GROUP_NAME: {
        type: Sequelize.STRING(50)
      },
      FPLAN_STATUS: {
        type: Sequelize.STRING(50)
      },
      FPLAN_VARIABLES: {
        type: Sequelize.STRING(3200)
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_FULFILMENT_PLANs');
  }
};