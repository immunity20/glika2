const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  //root file for the client/browser app
  entry: './src/client/client.js',

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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader'),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style2.css', {
      allChunks: true,
    })
  ]
};
