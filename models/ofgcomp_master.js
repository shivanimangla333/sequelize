'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFGCOMP_MASTER = sequelize.define('OFGCOMP_MASTER', {
    COMPONENT_CODE: DataTypes.STRING(20),
    COMPONENT_NAME: DataTypes.STRING(500),
    STATUS: DataTypes.STRING(50),
    COMPONENT_TYPE: DataTypes.STRING(50),
    DESCRIPTION: DataTypes.STRING(5000),
    OFFERING_ID: DataTypes.INTEGER,
    CONSUMPTION_METHOD: DataTypes.STRING(100),
    TAGS: DataTypes.STRING(1000),
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING(100),
    UPDATEDBY_NAME: DataTypes.STRING(100),
    ISVISIBLE: DataTypes.STRING(1)
  }, {});
  OFGCOMP_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return OFGCOMP_MASTER;
};