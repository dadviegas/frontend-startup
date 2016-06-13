import webPackBase from '../../base/webpack'
import webpack from 'webpack'
import paths from '../../base/paths'

const options = {}

webPackBase.plugins.push(
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin()
)

export default { ...options, ...webPackBase }
