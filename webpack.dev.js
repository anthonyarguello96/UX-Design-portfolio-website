const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = merge(common, {
  devtool: false,
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Converts out CSS into JS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'project1.html',
      template: 'src/project1.html',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'project2.html',
      template: 'src/project2.html',
      minify: false,
    }),
    new ESLintPlugin({
      extensions: ['js'],
    }),
  ],
});
