'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_MATRIX = sequelize.define('OFG_MATRIX', {
    OOFERING_ID: DataTypes.INTEGER,
    FEATURED_SEQUENCE: DataTypes.INTEGER,
    OFG_CAT_SEQUENCE: DataTypes.INTEGER
  }, {});
  OFG_MATRIX.associate = function(models) {
    // associations can be defined here
  };
  return OFG_MATRIX;
};