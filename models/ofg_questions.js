'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_QUESTIONS = sequelize.define('OFG_QUESTIONS', {
    QUESTION_CODE: DataTypes.STRING,
    QUESTIONDEF_TYPE: DataTypes.STRING,
    QUESTION_ENTITYID: DataTypes.INTEGER,
    RESPONSE_TYPE: DataTypes.STRING,
    QUESTION_TEXT: DataTypes.STRING,
    RESPONSE_MODE: DataTypes.STRING,
    QUESTION_SEQUENCE: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    RESPONSE_VALUE: DataTypes.TEXT,
    ISVISIBLE: DataTypes.STRING,
    MAX_LIMIT: DataTypes.INTEGER,
    QUESTION_PARENT_VALUE: DataTypes.STRING,
    QUESTION_PARENT_ID: DataTypes.INTEGER,
    CATEGORY_ID: DataTypes.INTEGER,
    HELP_TEXT: DataTypes.STRING,
    DATASOURCE_TYPE: DataTypes.INTEGER,
    RO_RESPONSES: DataTypes.STRING
  }, {});
  OFG_QUESTIONS.associate = function(models) {
    // associations can be defined here
  };
  return OFG_QUESTIONS;
};