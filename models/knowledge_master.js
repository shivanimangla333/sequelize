'use strict';
module.exports = (sequelize, DataTypes) => {
  const KNOWLEDGE_MASTER = sequelize.define('KNOWLEDGE_MASTER', {
    KNOW_CODE: DataTypes.STRING(20),
    TITLE: DataTypes.STRING(500),
    KNOW_TYPE: DataTypes.STRING(100),
    KNOW_CONTENT_TYPE: DataTypes.STRING(100),
    KNOW_CONTENT: DataTypes.STRING(5000),
    KNOW_PARENT_ID: DataTypes.INTEGER,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING(100),
    UPDATEDBY_NAME: DataTypes.STRING(100),
    KNOW_PARENT_TYPE: DataTypes.STRING(100),
    ISVISIBLE: DataTypes.STRING(1),
    DISCOVERY_DOC_ID: DataTypes.STRING(100)
  }, {});
  KNOWLEDGE_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return KNOWLEDGE_MASTER;
};