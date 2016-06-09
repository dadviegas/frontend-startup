import { server } from './server'
import { webpack } from './webpack'
import staticResources from '../base/static'

export default {
  static: staticResources,
  server,
  webpack
}
