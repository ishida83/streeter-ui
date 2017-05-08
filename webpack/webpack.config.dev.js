import webpack from 'webpack';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { jsLoader, cssLoader } from './webpack.loaders';
import postcssConfig from './config/postcss.config';
import { server } from './../templates/logging';

const webpackConfig = webpack({
  context: path.resolve(__dirname, '../'),

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.js',
  ],

  output: {
    filename: '[name].[hash].bundle.js',
    path: '/',
  },

  module: {
    rules: [
      jsLoader,
      cssLoader,
    ],
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
  ],
});

const serverConfig = {
  contentBase: '/public',
  hot: true,
  inline: true,
  stats: 'minimal',
};

new WebpackDevServer(webpackConfig, serverConfig).listen(3000, 'localhost', () => {
  console.log(server);
});
