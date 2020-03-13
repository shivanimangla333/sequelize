'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_ATTRIBUTES = sequelize.define('OFG_ATTRIBUTES', {
    ATTRIBUTE_NAME: DataTypes.STRING(100),
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING(100),
    UPDATEDBY_NAME: DataTypes.STRING(100),
    OFFERING_ID: DataTypes.INTEGER,
    ATTRIBUTE_VALUE: DataTypes.STRING(1000),
    ISVISIBLE: DataTypes.STRING(1)
  }, {});
  OFG_ATTRIBUTES.associate = function(models) {
    // associations can be defined here
  };
  return OFG_ATTRIBUTES;
};