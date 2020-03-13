'use strict';
module.exports = (sequelize, DataTypes) => {
  const MENULIST = sequelize.define('MENULIST', {
    MODULE: DataTypes.STRING,
    FIELD1_NAME: DataTypes.STRING,
    FIELD1_KEY: DataTypes.STRING,
    FIELD1_VALUE: DataTypes.STRING(1000),
    FIELD2_NAME: DataTypes.STRING,
    FIELD2_KEY: DataTypes.STRING,
    FIELD2_VALUE: DataTypes.STRING(1000),
    FIELD3_NAME: DataTypes.STRING,
    FIELD3_KEY: DataTypes.STRING,
    FIELD3_VALUE: DataTypes.STRING(1000)
  }, {});
  MENULIST.associate = function(models) {
    // associations can be defined here
  };
  return MENULIST;
};