'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPCM_PREFERENCES = sequelize.define('SPCM_PREFERENCES', {
    OFFERING_ID: DataTypes.INTEGER,
    HIDE_SELF_SERVICE_ACTIONS: DataTypes.STRING,
    HIDE_PRICE: DataTypes.STRING,
    HIDE_SLA: DataTypes.STRING,
    COMPLEXITY_EDITABLE: DataTypes.STRING,
    EDITABLE_EXPECTEDBY: DataTypes.STRING,
    RESTRICT_CANCELLATION_SR: DataTypes.STRING,
    RESTRICT_REOPEN_SR: DataTypes.STRING,
    HIDE_DESCRIPTION: DataTypes.STRING,
    HIDE_COMPONENTS: DataTypes.STRING,
    HIDE_CONTACTS: DataTypes.STRING,
    PAST_DATE_ALLOWED:DataTypes.STRING,
    HIDE_APPROVER_DISCLAIMER: DataTypes.STRING,
    HIDE_SERVICE_DISCLAIMER: DataTypes.STRING
  }, {});
  SPCM_PREFERENCES.associate = function(models) {
    // associations can be defined here
  };
  return SPCM_PREFERENCES;
};