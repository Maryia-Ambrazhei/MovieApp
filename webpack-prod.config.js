/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack-common.config');

module.exports = merge(commonConfig, {
  mode: 'production',
});
