'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');


module.exports = {

  entry: {
      "sf.form": ['./src/index.js']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    extensions: [
      '.js',
      '.json'
    ]
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: {index: '/'}
  },

  module: {
    rules: [
      loaders.jsmap,
      loaders.eslint,

      loaders.js
    ]
  },
  externals: {
    "sf-core": {
      commonjs: "sf-core"
    }
  }
};