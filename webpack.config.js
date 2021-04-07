const path = require('path');

module.exports = {
  devtool: false,
  mode: 'development',
  entry: './src/index.js',
  output:{
    filename: 'index.[contenthash]js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  }
};
