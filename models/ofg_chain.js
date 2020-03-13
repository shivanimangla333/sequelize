'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_CHAIN = sequelize.define('OFG_CHAIN', {
    OFFERING_ID: DataTypes.INTEGER,
    CHAIN_TYPE: DataTypes.STRING,
    CHAIN_COMPANY_ID: DataTypes.INTEGER,
    CHAIN_COMPANY: DataTypes.STRING,
    CHAIN_GROUP_ID: DataTypes.INTEGER,
    CHAIN_GROUP_NAME: DataTypes.STRING,
    CHAIN_PERSON_ID: DataTypes.INTEGER,
    CHAIN_PERSON_NAME: DataTypes.STRING,
    CHAIN_PERSON_EMAIL: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    ISVISIBLE: DataTypes.STRING,
    AMS_CREATE_ID: DataTypes.INTEGER,
    AMS_EDIT_ID: DataTypes.INTEGER
  }, {});
  OFG_CHAIN.associate = function(models) {
    // associations can be defined here
  };
  return OFG_CHAIN;
};