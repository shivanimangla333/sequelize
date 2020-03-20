'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('INC_QUESTIONs', {
      QUESTION_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      QUESTION_CODE: {
        type: Sequelize.STRING(20)
      },
      QUESTIONDEF_TYPE: {
        type: Sequelize.STRING(50)
      },
      QUESTION_ENTITYID: {
        type: Sequelize.INTEGER
      },
      RESPONSE_TYPE: {
        type: Sequelize.STRING(50)
      },
      QUESTION_TEXT: {
        type: Sequelize.STRING(500)
      },
      RESPONSE_MODE: {
        type: Sequelize.STRING(50)
      },
      QUESTION_SEQUENCE: {
        type: Sequelize.STRING(50)
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
      RESPONSE_VALUE: {
        type: Sequelize.STRING(3200)
      },
      ISVISIBLE: {
        type: Sequelize.STRING(1),
        defaultValue:'y'
      },
      MAX_LIMIT: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      QUESTION_PARENT_VALUE: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      QUESTION_PARENT_ID: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      CATEGORY_ID: {
        type: Sequelize.INTEGER
      },
      HELP_TEXT: {
        type: Sequelize.STRING(500)
      },
      DATASOURCE_TYPE: {
        type: Sequelize.INTEGER
      },
      RO_RESPONSES: {
        type: Sequelize.STRING(1000)
      },
      TARGET: {
        type: Sequelize.STRING(500)
      },
      OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      CATEGORY_STATUS: {
        type: Sequelize.STRING(100)
      },
      CATEGORY_NAME: {
        type: Sequelize.STRING(100)
      },
      CATEGORY_SEQUENCE: {
        type: Sequelize.INTEGER
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('INC_QUESTIONs');
  }
};



