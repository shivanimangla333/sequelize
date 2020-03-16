'use strict';
module.exports = (sequelize, DataTypes) => {
  const SERVICE_TYPE = sequelize.define('SERVICE_TYPE', {
    SERVICE_TYPE_NAME: DataTypes.STRING
  }, {});
  SERVICE_TYPE.associate = function(models) {
    // associations can be defined here
  };
  return SERVICE_TYPE;
};