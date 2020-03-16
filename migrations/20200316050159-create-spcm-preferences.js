'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SPCM_PREFERENCEs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      HIDE_SELF_SERVICE_ACTIONS: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      HIDE_PRICE: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      HIDE_SLA: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      COMPLEXITY_EDITABLE: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      EDITABLE_EXPECTEDBY: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      RESTRICT_CANCELLATION_SR: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      RESTRICT_REOPEN_SR: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      HIDE_DESCRIPTION: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      HIDE_COMPONENTS: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      HIDE_CONTACTS: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SPCM_PREFERENCEs');
  }
};