'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_MATRices', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OOFERING_ID: {
        type: Sequelize.INTEGER
      },
      FEATURED_SEQUENCE: {
        type: Sequelize.INTEGER
      },
      OFG_CAT_SEQUENCE: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_MATRices');
  }
};