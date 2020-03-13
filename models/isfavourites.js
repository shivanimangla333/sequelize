'use strict';
module.exports = (sequelize, DataTypes) => {
  const ISFAVOURITES = sequelize.define('ISFAVOURITES', {
    USER_ID: DataTypes.INTEGER
  }, {});
  ISFAVOURITES.associate = function(models) {
    // associations can be defined here
  };
  return ISFAVOURITES;
};