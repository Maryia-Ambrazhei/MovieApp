/* eslint-disable import/no-extraneous-dependencies */
const { map } = require('lodash');
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack-common.config');

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
    },
    open: ['./dist/index.html'],
  },
});
