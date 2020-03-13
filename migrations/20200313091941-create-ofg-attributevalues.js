'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_ATTRIBUTEVALUEs', {
      ATTRIBUTEVALUE_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ATTRIBUTE_ID: {
        type: Sequelize.INTEGER
      },
      ATTRIBUTE_VALUE: {
        type: Sequelize.STRING(1000)
      },
      CREATED_BY: {
        type: Sequelize.INTEGER
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER
      },
      CREATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      UPDATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_ATTRIBUTEVALUEs');
  }
};