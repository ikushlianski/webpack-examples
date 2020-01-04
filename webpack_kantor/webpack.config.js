const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require('webpack');

const DIST_FOLDER = '/build';

module.exports = {
  context: __dirname + '/src',
  entry: {
    home: './home',
    about: './about',
  },
  output: {
    path: __dirname + DIST_FOLDER,
    filename: '[name].js',
    library: '[name]',
  },
  watch: NODE_ENV === "development",
  devtool: NODE_ENV === "development" ? "cheap-inline-module-source-map": false,
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),

  ],
  mode: NODE_ENV,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
