const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");






module.exports = merge(common,{
  devtool: false,
  mode: 'production',
  output:{
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
    new CleanWebpackPlugin()
  ],
  module:{
    rules: [
      {
      test: /\.css$/,
      use:[
      MiniCssExtractPlugin.loader, //Extract CSS into the CSS files
        'css-loader' // Converts out CSS into JS
      ]
    }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
});
