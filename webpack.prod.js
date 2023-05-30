/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  /* plugins: [
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js',
    }),
  ], */
});