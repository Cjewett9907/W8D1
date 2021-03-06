const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/bench_bnb.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-maps',
  module: {
    rules: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env', '@babel/react']
      }
    },
    {
      test: /\.node$/,
      loader: 'node-loader'
    }
    ]
  }
};
