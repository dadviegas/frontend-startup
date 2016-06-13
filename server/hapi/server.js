import Hapi from 'hapi'
import configuration from '../../configuration'

export const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: configuration.paths.static
      }
    }
  }
})

export const runServer = () => {
  server.start((err) => {
    if (err) {
      throw err
    }

    // require('./routes')
    console.log(`Server running at: ${server.info.uri}`)
  })
}

server.connection(configuration.settings.server)
