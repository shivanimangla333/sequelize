'use strict';
module.exports = (sequelize, DataTypes) => {
  const CATEGORY_QUESTIONS = sequelize.define('CATEGORY_QUESTIONS', {
    CATEGORY_NAME: DataTypes.STRING,
    OFFERING_ID: DataTypes.INTEGER,
    CATEGORY_STATUS: DataTypes.STRING,
    CATEGORY_SEQUENCE: DataTypes.INTEGER,
    ISVISIBLE: DataTypes.STRING(1)
  }, {});
  CATEGORY_QUESTIONS.associate = function(models) {
    // associations can be defined here
  };
  return CATEGORY_QUESTIONS;
};