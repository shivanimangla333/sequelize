'use strict';

module.exports = {
  up:async (queryInterface, Sequelize) => {
    try{
      await queryInterface.addColumn('OFGCOMP_MASTERs','COMPONENT_SEQUENCE',{
      type: Sequelize.INTEGER
    });
      await queryInterface.addColumn('OFG_MASTERs','EXTERNALLY_FULFILLED',{
        type:Sequelize.STRING(100),
        defaultValue: 'false'
      });
      await queryInterface.addColumn('OFG_MASTERs','USE_EXTERNAL_NUMBER',{
        type: Sequelize.STRING(100),
        defaultValue: 'false'
      });
      await queryInterface.addColumn('OFG_MASTERs','DELIVERY_MODE',{
        type: Sequelize.STRING(50),
        defaultValue: "Shipment Based"
      });
      await queryInterface.addColumn('OFG_MASTERs','OFFERING_TYPE',{
        type: Sequelize.STRING(100),
        defaultValue: "Others"
      });
      return Promise.resolve();
    } catch (e){
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try{
      await queryInterface.removeColumn('OFGCOMP_MASTERs','COMPONENT_SEQUENCE');
      await queryInterface.removeColumn('OFG_MASTERs','EXTERNALLY_FULFILLED');
      await queryInterface.removeColumn('OFG_MASTERs','USE_EXTERNAL_NUMBER');
      await queryInterface.removeColumn('OFG_MASTERs','DELIVERY_MODE');
      await queryInterface.removeColumn('OFG_MASTERs','OFFERING_TYPE');
      return Promise.resolve();
    } catch(e){
      return Promise.reject(e);
    }
    
  }
};
