'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('SPCM_PREFERENCES','PAST_DATE_ALLOWED',Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('SPCM_PREFERENCES','PAST_DATE_ALLOWED');
  }
};
