'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OFG_MASTERs', {
      OFFERING_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OFFERING_CODE: {
        type: Sequelize.STRING(20)
      },
      OFFERING_NAME: {
        type: Sequelize.STRING(500)
      },
      COMPANY_ID: {
        type: Sequelize.INTEGER
      },
      COMPANY_NAME: {
        type: Sequelize.STRING(500)
      },
      CATEGORY_ID: {
        type: Sequelize.INTEGER
      },
      CATEGORY_NAME: {
        type: Sequelize.STRING(500)
      },
      SUB_CATEGORY_NAME: {
        type: Sequelize.STRING(500)
      },
      DESCRIPTION: {
        type: Sequelize.STRING(5000)
      },
      SUMMARY: {
        type: Sequelize.STRING(500)
      },
      DEMAND_REQUEST_NUMBER: {
        type: Sequelize.STRING(50)
      },
      FEATURED: {
        type: Sequelize.STRING(500)
      },
      SERVICE_CRITICALITY: {
        type: Sequelize.STRING(500)
      },
      STATUS: {
        type: Sequelize.STRING(50)
      },
      OFFERING_ICON: {
        type: Sequelize.STRING(500)
      },
      OFFERING_PICTURE: {
        type: Sequelize.STRING(500)
      },
      SUPPLIER_REFERENCE_NUMBER: {
        type: Sequelize.STRING
      },
      CONSUMPTION_METHOD: {
        type: Sequelize.STRING
      },
      NON_ENTITLED_VIEW: {
        type: Sequelize.STRING(1)
      },
      TAGS: {
        type: Sequelize.STRING(1000)
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      CREATED_BY: {
        type: Sequelize.INTEGER
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER
      },
      CREATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      UPDATEDBY_NAME: {
        type: Sequelize.STRING(100)
      },
      EXPIRATION_DATE: {
        type: Sequelize.DATE
      },
      SERVICE_CRITICALITY_NAME: {
        type: Sequelize.STRING(500)
      },
      CMDB_AVAILABILITY: {
        type: Sequelize.STRING(1),
        defaultValue: 'N'
      },
      CMDB_CI_ID: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      ACTUALCOMMENCEMENTDATE: {
        type: Sequelize.DATE
      },
      AMS_AVAILABILITY: {
        type: Sequelize.STRING(1),
        defaultValue: 'N'
      },
      APPROVAL_REQUIRED: {
        type: Sequelize.STRING(3)
      },
      SEARCH_AVAILABILITY: {
        type: Sequelize.STRING(1),
        defaultValue: 'N'
      },
      SEARCH_DOC_ID: {
        type: Sequelize.STRING(100),
        defaultValue: null
      },
      HIDE_PRICE: {
        type: Sequelize.STRING(100),
        defaultValue: "false"
      },
      HIDE_SLA: {
        type: Sequelize.STRING(100),
        defaultValue: "false"
      },
      SUBCATEGORY_ID: {
        type: Sequelize.INTEGER
      },
      COMPLEXITY: {
        type: Sequelize.STRING(100)
      },
      COMPLEXITY_EDITABLE: {
        type: Sequelize.STRING(100),
        defaultValue: 'false'
      },
      EDITABLE_EXPECTEDBY: {
        type: Sequelize.STRING(100),
        defaultValue: 'false'
      },
      WORK_ITEM_TYPE: {
        type: Sequelize.STRING(50),
        defaultValue: "serviceRequest"
      },
      EXTERNALLY_FULFILLED: {
        type: Sequelize.STRING(100),
        defaultValue: 'false'
      },
      USE_EXTERNAL_NUMBER: {
        type: Sequelize.STRING(100),
        defaultValue: 'false'
      },
      DELIVERY_MODE: {
        type: Sequelize.STRING(50),
        defaultValue: "Non-Shipment Based"
      },
      OFFERING_TYPE: {
        type: Sequelize.STRING(100),
        defaultValue: 'Others'
      },
      APPROVER_DISCLAIMER: {
        type: Sequelize.TEXT('long')
      },
      SERVICE_DISCLAIMER: {
        type: Sequelize.TEXT('long')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OFG_MASTERs');
  }
};