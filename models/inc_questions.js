'use strict';
module.exports = (sequelize, DataTypes) => {
  const INC_QUESTIONS = sequelize.define('INC_QUESTIONS', {
    QUESTION_CODE: DataTypes.STRING,
    QUESTIONDEF_TYPE: DataTypes.STRING,
    QUESTION_ENTITYID: DataTypes.INTEGER,
    RESPONSE_TYPE: DataTypes.STRING,
    QUESTION_TEXT: DataTypes.STRING(500),
    RESPONSE_MODE: DataTypes.STRING,
    QUESTION_SEQUENCE: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    RESPONSE_VALUE: DataTypes.STRING(3200),
    ISVISIBLE: DataTypes.STRING(1),
    MAX_LIMIT: DataTypes.INTEGER,
    QUESTION_PARENT_VALUE: DataTypes.STRING,
    QUESTION_PARENT_ID: DataTypes.INTEGER,
    CATEGORY_ID: DataTypes.INTEGER,
    HELP_TEXT: DataTypes.STRING(500),
    DATASOURCE_TYPE: DataTypes.INTEGER,
    RO_RESPONSES: DataTypes.STRING(1000),
    TARGET: DataTypes.STRING(500),
    OFFERING_ID: DataTypes.INTEGER,
    CATEGORY_STATUS: DataTypes.STRING,
    CATEGORY_NAME: DataTypes.STRING,
    CATEGORY_SEQUENCE: DataTypes.INTEGER
  }, {});
  INC_QUESTIONS.associate = function(models) {
    // associations can be defined here
  };
  return INC_QUESTIONS;
};