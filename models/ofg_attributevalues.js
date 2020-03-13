'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_ATTRIBUTEVALUES = sequelize.define('OFG_ATTRIBUTEVALUES', {
    ATTRIBUTE_ID: DataTypes.INTEGER,
    ATTRIBUTE_VALUE: DataTypes.STRING(1000),
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING(100),
    UPDATEDBY_NAME: DataTypes.STRING(100)
  }, {});
  OFG_ATTRIBUTEVALUES.associate = function(models) {
    // associations can be defined here
  };
  return OFG_ATTRIBUTEVALUES;
};