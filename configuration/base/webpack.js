import path from 'path'
import paths from './paths'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  devtool: 'cheap-module-eval-source-map',
  context: paths.source,
  entry: [
    'webpack-hot-middleware/client',
    path.join(paths.source, 'index.js')
  ],
  output: {
    publicPath: paths.static,
    path: paths.dist,
    filename: 'dist/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: './index.html',
      template: path.join(paths.source, 'index.html')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: paths.source,
        loaders: ['babel'],
        exclude: /node_modules/,
      }
    ]
  }
  // webpack-dev-middleware options
  // See https://github.com/webpack/webpack-dev-middleware
  // assets: {},

  // webpack-hot-middleware options
  // See https://github.com/glenjamin/webpack-hot-middleware
  // hot: {}
}
