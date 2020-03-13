'use strict';
module.exports = (sequelize, DataTypes) => {
  const PERMISSIONMATRIX = sequelize.define('PERMISSIONMATRIX', {
    ROLE_ID: DataTypes.INTEGER,
    ROLE_NAME: DataTypes.STRING,
    OPERATION: DataTypes.STRING,
    REGEX: DataTypes.STRING,
    HTTP_GET: DataTypes.INTEGER,
    HTTP_POST: DataTypes.INTEGER,
    HTTP_PATCH: DataTypes.INTEGER,
    HTTP_DELETE: DataTypes.INTEGER,
    DESCRIPTION: DataTypes.STRING
  }, {});
  PERMISSIONMATRIX.associate = function(models) {
    // associations can be defined here
  };
  return PERMISSIONMATRIX;
};