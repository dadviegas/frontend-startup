import Hapi from 'hapi'
import configuration from '../../configuration'

export const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: configuration.settings.static.source
      }
    }
  }
})

server.connection(configuration.settings.server)
