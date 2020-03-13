'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_QUESTIONVALUES = sequelize.define('OFG_QUESTIONVALUES', {
    QUESTION_ID: DataTypes.INTEGER,
    RESPONSE_VALUE: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING
  }, {});
  OFG_QUESTIONVALUES.associate = function(models) {
    // associations can be defined here
  };
  return OFG_QUESTIONVALUES;
};