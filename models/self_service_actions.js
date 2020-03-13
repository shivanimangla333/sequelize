'use strict';
module.exports = (sequelize, DataTypes) => {
  const SELF_SERVICE_ACTIONS = sequelize.define('SELF_SERVICE_ACTIONS', {
    OFFERING_ID: DataTypes.INTEGER,
    ACTION: DataTypes.STRING,
    DESCRIPTION: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    ISVISIBLE: DataTypes.STRING
  }, {});
  SELF_SERVICE_ACTIONS.associate = function(models) {
    // associations can be defined here
  };
  return SELF_SERVICE_ACTIONS;
};