const log4js = require('koa-log4')
// const path = require('path')

// log4js.configure(path.join(__dirname, '../../config/log4j.json'))

let logger
export const getLogger = () => {
  if (logger === undefined) {
    logger = log4js.getLogger('app')
  }

  return logger
}

export const shutdownLogger = () => {
  log4js.shutdown()
}
