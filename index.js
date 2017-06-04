/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-instafeed',
  options: {
    nodeAssets: {
      'instafeed.js': {
        vendor: ['instafeed.js']
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.import('vendor/instafeed.js/instafeed.js', {
        using: [{ transformation: 'amd', as: 'instafeed' }]
      });
    }
  }
};
