const enviroment = process.env.NODE_ENV
const isProduction = enviroment === 'production'
const isDevelopment = enviroment === 'development'
const appVersion = require('../package.json').version
const settings = require(`./${enviroment}`).default

const appConfiguration = {
  enviroment,
  isProduction,
  isDevelopment,
  appVersion,
  settings
}

Object.freeze(appConfiguration)

export default appConfiguration

console.log(`Enviroment: ${enviroment}, version: ${appVersion}`)
