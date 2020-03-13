'use strict';
module.exports = (sequelize, DataTypes) => {
  const CATALOG_CLASSIFICATION = sequelize.define('CATALOG_CLASSIFICATION', {
    C_CLASS:{
      type: DataTypes.STRING
    }, 
    C_SUBCLASS:{
      type: DataTypes.STRING,
    },
    COMPANY_NAME:{
      type: DataTypes.STRING,
    },
    COMPANY_ID:{
      type: DataTypes.INTEGER,
    },
    ACTIVE:{
      type:DataTypes.STRING,
    } 
  }, {});
  CATALOG_CLASSIFICATION.associate = function(models) {
    // associations can be defined here
  };
  return CATALOG_CLASSIFICATION;
};