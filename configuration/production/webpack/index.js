import webPackBase from '../../base/webpack'
import webpack from 'webpack'

const options = {}

webPackBase.plugins.push(
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    minimize: true,
    mangle: true,
    compressor: {
      warnings: false
    }
  })
)

export default { ...options, ...webPackBase }
