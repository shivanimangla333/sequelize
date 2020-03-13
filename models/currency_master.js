'use strict';
module.exports = (sequelize, DataTypes) => {
  const CURRENCY_MASTER = sequelize.define('CURRENCY_MASTER', {
    CURRENCY_NAME: DataTypes.STRING,
    CURRENCY_VALUE: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER
  }, {});
  CURRENCY_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return CURRENCY_MASTER;
};