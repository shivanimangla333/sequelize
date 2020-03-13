'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_FULFILMENT_PLANS = sequelize.define('OFG_FULFILMENT_PLANS', {
    FPLAN_DEF_TYPE: DataTypes.STRING,
    FPLAN_ENTITYID: DataTypes.INTEGER,
    FPLAN_TEXT: DataTypes.STRING,
    FPLAN_DESC: DataTypes.STRING,
    FPLAN_EXETYPE: DataTypes.STRING,
    FPLAN_SEQUENCE: DataTypes.STRING,
    FPLAN_COMPANY_ID: DataTypes.INTEGER,
    FPLAN_COMPANY_NAME: DataTypes.STRING,
    FPLAN_GROUP_ID: DataTypes.INTEGER,
    FPLAN_GROUP_NAME: DataTypes.STRING,
    FPLAN_STATUS: DataTypes.STRING,
    FPLAN_VARIABLES: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    ISVISIBLE: DataTypes.STRING
  }, {});
  OFG_FULFILMENT_PLANS.associate = function(models) {
    // associations can be defined here
  };
  return OFG_FULFILMENT_PLANS;
};