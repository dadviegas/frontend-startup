import path from 'path'

export default {
  context: path.join(__dirname, '../../src'),
  entry: ['./index'],
  output: {
    path: path.join(__dirname, '../../src/dist'),
    filename: 'bundle.js'
  },
  // webpack-dev-middleware options
  // See https://github.com/webpack/webpack-dev-middleware
  assets: {},

  // webpack-hot-middleware options
  // See https://github.com/glenjamin/webpack-hot-middleware
  hot: {}
}
