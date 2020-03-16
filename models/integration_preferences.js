'use strict';
module.exports = (sequelize, DataTypes) => {
  const INTEGRATION_PREFERENCES = sequelize.define('INTEGRATION_PREFERENCES', {
    OFFERING_ID: DataTypes.INTEGER,
    ITEM_NUMBER: DataTypes.STRING,
    SELECTED_COMPONENTS: DataTypes.STRING,
    SUBMIT_DATE: DataTypes.STRING,
    EXPECTED_COMPLETION_DATE: DataTypes.STRING,
    INFORMATION_PROVIDED: DataTypes.STRING,
    ITEM_FULFILLMENT_GROUP: DataTypes.STRING,
    COMPONENT_FULFILLMENT_GROUP: DataTypes.STRING,
    OFFERING_NAME: DataTypes.STRING
  }, {});
  INTEGRATION_PREFERENCES.associate = function(models) {
    // associations can be defined here
  };
  return INTEGRATION_PREFERENCES;
};