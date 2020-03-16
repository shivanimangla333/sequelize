'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('INTEGRATION_PREFERENCEs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      ITEM_NUMBER: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      SELECTED_COMPONENTS: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      SUBMIT_DATE: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      EXPECTED_COMPLETION_DATE: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      INFORMATION_PROVIDED: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      ITEM_FULFILLMENT_GROUP: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      COMPONENT_FULFILLMENT_GROUP: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      OFFERING_NAME: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('INTEGRATION_PREFERENCEs');
  }
};