import combineLoaders from 'webpack-combine-loaders';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const jsLoader = {
  test: /\.js?$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
  ],
};

export const cssLoader = {
  test: /\.scss?$/,
  exclude: /node_modules/,
  loader: combineLoaders([
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]--[hash:base64:5]',
      },
    },
    'postcss-loader',
  ]),
};

export const cssLoaderDist = {
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]--[hash:base64:5]',
        },
      },
      'postcss-loader',
    ],
  }),
};

export const fileLoader = {
  test: /\.(png|svg|ico)?$/,
  exclude: /node_modules/,
  use: 'file-loader?name=assets/[name]-[hash].[ext]',
};
