'use strict';
module.exports = (sequelize, DataTypes) => {
  const CATEGORY_MASTER = sequelize.define('CATEGORY_MASTER', {
    CATEGORY_CODE: DataTypes.STRING,
    CATEGORY_NAME: DataTypes.STRING,
    SUB_CATEGORY_NAME: DataTypes.STRING,
    COMPANY_ID: DataTypes.INTEGER,
    COMAPANY_NAME: DataTypes.STRING,
    PORTFOLIO_GROUP_ID: DataTypes.INTEGER,
    PORTFOLIO_GROUP_NAME: DataTypes.STRING,
    PORTFOLIO_MANAGER_ID: DataTypes.INTEGER,
    PORTFOLIO_MANAGER_NAME: DataTypes.STRING,
    STATUS: DataTypes.STRING,
    CATEGORY_ICON: DataTypes.STRING,
    SUB_CATEGORY_ICON: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    ISVISIBLE: DataTypes.STRING
  }, {});
  CATEGORY_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return CATEGORY_MASTER;
};