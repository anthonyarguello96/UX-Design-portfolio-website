const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');





module.exports = merge(common,{
  devtool: false,
  mode: 'production',
  output:{
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
});
