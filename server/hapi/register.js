import { server } from './server'
import Inert from 'inert'
import hapiWebpack from 'hapi-webpack'
import configuration from '../../configuration'

const webpack = {
  register: hapiWebpack,
  options: configuration.settings.webpack
}

server.register([
  Inert,
  webpack
], () => {
  server.start((err) => {
    if (err) {
      throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
  })
})
