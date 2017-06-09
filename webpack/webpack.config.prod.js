import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { jsLoader, cssLoaderDist, fileLoader } from './webpack.loaders';
import postcssConfig from './config/postcss.config';

export default {
  entry: [
    './src/index.js',
  ],

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  module: {
    rules: [
      jsLoader,
      cssLoaderDist,
      fileLoader,
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (module.context && module.context.indexOf('node_modules') !== -1),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'templates/index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: postcssConfig,
      },
    }),
    new ExtractTextPlugin('style.[hash].bundle.css'),
    new UglifyJsPlugin(),
  ],
};
