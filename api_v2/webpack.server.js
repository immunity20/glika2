const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  //  tell webpack we building bundle for nodejs not browser
  target: 'node',

  //  root file for the server application
  entry: './src/index.js',

  //  output file and its location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],

  //  run babel for every filename
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
