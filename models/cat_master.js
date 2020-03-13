'use strict';
module.exports = (sequelize, DataTypes) => {
  const CAT_MASTER = sequelize.define('CAT_MASTER', {
    CATEGORY: DataTypes.STRING,
    SUB_CATEGORY: DataTypes.STRING,
    COMPANY_NAME: DataTypes.STRING,
    COMPANY_ID: DataTypes.INTEGER,
    ACTIVE: DataTypes.STRING(10)
  }, {});
  CAT_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return CAT_MASTER;
};