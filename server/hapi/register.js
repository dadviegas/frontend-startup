import { server, runServer } from './server'
import Inert from 'inert'
import hapiWebpackPlugin from 'hapi-webpack-plugin'
import configuration from '../../configuration'
import Webpack from 'webpack'

const compiler = new Webpack(configuration.settings.webpack)

const assets = {
  stats: {
    colors: true
  }
}

const hot = {
  stats: {
    colors: true
  }
}

const webpack = {
  register: hapiWebpackPlugin,
  options: { compiler, assets, hot }
}

const plugins = [
  webpack,
	{register: Inert}
]

server.register(plugins, runServer)

