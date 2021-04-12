const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge}  = require('webpack-merge');




module.exports = merge(common,{
  devtool: false,
  mode: 'development',
  output:{
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module:{
    rules: [
      {
      test: /\.css$/,
      use:[
        'style-loader', // Inject CSS into the DOM
        'css-loader' // Converts out CSS into JS
      ]
    }
    ]
  }
});
