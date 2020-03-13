'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_BILLINGDEF = sequelize.define('OFG_BILLINGDEF', {
    BILLINGDEF_TYPE: DataTypes.STRING(50),
    PARENT_ID: DataTypes.INTEGER,
    PRICE: DataTypes.DOUBLE,
    BASE_CURRENCY: DataTypes.STRING(100),
    BILLING_METHOD: DataTypes.STRING(100),
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING(100),
    UPDATEDBY_NAME: DataTypes.STRING(100),
    ISVISIBLE: DataTypes.STRING(1),
    BASE_CURRENCY_VALUE: DataTypes.INTEGER
  }, {});
  OFG_BILLINGDEF.associate = function(models) {
    // associations can be defined here
  };
  return OFG_BILLINGDEF;
};