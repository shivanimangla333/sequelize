'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_DISCLAIMER = sequelize.define('OFG_DISCLAIMER', {
    APPROVER_DISCLAIMER: DataTypes.STRING,
    OFFERING_ID: DataTypes.INTEGER,
    SERVICE_DISCLAIMER: DataTypes.STRING,
    ISVISIBLE: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING
  }, {});
  OFG_DISCLAIMER.associate = function(models) {
    // associations can be defined here
  };
  return OFG_DISCLAIMER;
};