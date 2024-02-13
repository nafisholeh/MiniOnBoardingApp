const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '#images': path.resolve(__dirname, 'src/assets/images'),
      '#components': path.resolve(__dirname, 'src/components'),
      '#screens': path.resolve(__dirname, 'src/screens'),
      '#utils': path.resolve(__dirname, 'src/utils'),
      '#commons': path.resolve(__dirname, 'src/commons'),
      '#constants': path.resolve(__dirname, 'src/constants'),
    },
  },
};
