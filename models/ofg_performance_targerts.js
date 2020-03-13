'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_PERFORMANCE_TARGERTS = sequelize.define('OFG_PERFORMANCE_TARGERTS', {
    OFFERING_ID: DataTypes.INTEGER,
    GOAL_TYPE: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    ISVISIBLE: DataTypes.STRING,
    SUPPORT_TYPE: DataTypes.STRING,
    PRIORITY: DataTypes.STRING,
    GOAL_DURATION: DataTypes.INTEGER,
    GOAL_DURATION_UNIT: DataTypes.STRING,
    WORKING_HOURS_START: DataTypes.STRING,
    WORKING_HOURS_END: DataTypes.STRING
  }, {});
  OFG_PERFORMANCE_TARGERTS.associate = function(models) {
    // associations can be defined here
  };
  return OFG_PERFORMANCE_TARGERTS;
};