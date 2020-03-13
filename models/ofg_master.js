'use strict';
module.exports = (sequelize, DataTypes) => {
  const OFG_MASTER = sequelize.define('OFG_MASTER', {
    OFFERING_CODE: DataTypes.STRING,
    OFFERING_NAME: DataTypes.STRING,
    COMPANY_ID: DataTypes.INTEGER,
    COMPANY_NAME: DataTypes.STRING,
    CATEGORY_ID: DataTypes.INTEGER,
    CATEGORY_NAME: DataTypes.STRING,
    SUB_CATEGORY_NAME: DataTypes.STRING,
    DESCRIPTION: DataTypes.STRING,
    SUMMARY: DataTypes.STRING,
    DEMAND_REQUEST_NUMBER: DataTypes.STRING,
    FEATURED: DataTypes.STRING,
    SERVICE_CRITICALITY: DataTypes.STRING,
    STATUS: DataTypes.STRING,
    OFFERING_ICON: DataTypes.STRING,
    OFFERING_PICTURE: DataTypes.STRING,
    SUPPLIER_REFERENCE_NUMBER: DataTypes.STRING,
    CONSUMPTION_METHOD: DataTypes.STRING,
    NON_ENTITLED_VIEW: DataTypes.STRING,
    TAGS: DataTypes.STRING,
    CREATED_BY: DataTypes.INTEGER,
    UPDATED_BY: DataTypes.INTEGER,
    CREATEDBY_NAME: DataTypes.STRING,
    UPDATEDBY_NAME: DataTypes.STRING,
    EXPIRATION_DATE: DataTypes.DATE,
    SERVICE_CRITICALITY_NAME: DataTypes.STRING,
    CMDB_AVAILABILITY: DataTypes.STRING,
    CMDB_CI_ID: DataTypes.INTEGER,
    ACTUALCOMMENCEMENTDATE: DataTypes.DATE,
    AMS_AVAILABILITY: DataTypes.STRING,
    APPROVAL_REQUIRED: DataTypes.STRING,
    SEARCH_AVAILABILITY: DataTypes.STRING,
    SEARCH_DOC_ID: DataTypes.STRING,
    HIDE_PRICE: DataTypes.STRING,
    HIDE_SLA: DataTypes.STRING,
    SUBCATEGORY_ID: DataTypes.INTEGER,
    COMPLEXITY: DataTypes.STRING,
    COMPLEXITY_EDITABLE: DataTypes.STRING,
    EDITABLE_EXPECTEDBY: DataTypes.STRING,
    WORK_ITEM_TYPE: DataTypes.STRING
  }, {});
  OFG_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return OFG_MASTER;
};