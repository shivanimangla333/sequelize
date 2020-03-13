'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_ENTITLEMENTS = sequelize.define('OFG_ENTITLEMENTS', {
    ENTITLEMENT_CODE: DataTypes.STRING,
    ENTITLEMENT_FOR: DataTypes.STRING,
    ENTITLEDENTITY_ID: DataTypes.INTEGER,
    ENTITLEMENT_ENTITY: DataTypes.STRING,
    ENTITLED_TO: DataTypes.STRING,
    ENTITLEMENT_TYPE: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    ENTITLED_TO_ID: DataTypes.INTEGER,
    ISVISIBLE: DataTypes.STRING
  }, {});
  OFG_ENTITLEMENTS.associate = function(models) {
    // associations can be defined here
  };
  return OFG_ENTITLEMENTS;
};