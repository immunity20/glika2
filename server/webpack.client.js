const path = require('path');

module.exports = {

  //root file for the client/browser app
  entry:'./src/client/client.js',

  //output file and its location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public'),
  },

  //run babel for every filename
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets:
          [
            'react',
            'stage-0',
            [
              'env',
              {
                targets:
                {
                  browsers:
                  ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  }
};
