'use strict';
module.exports = (sequelize, DataTypes) => {
  const STATUS_TRANSITION = sequelize.define('STATUS_TRANSITION', {
    FROM_STATUS: DataTypes.STRING,
    TO_STATUS: DataTypes.STRING
  }, {});
  STATUS_TRANSITION.associate = function(models) {
    // associations can be defined here
  };
  return STATUS_TRANSITION;
};