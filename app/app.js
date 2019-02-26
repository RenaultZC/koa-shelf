const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Cors = require('@koa/cors')
// const BodyParser = require('koa-bodyparser')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')

const log4js = require('koa-log4')
const koaBody = require('koa-body')

const koaStatic = require('koa-static')
const path = require('path')

import graphqlHttp from './graphql'

const app = new Koa()
const router = new Router()
const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  console.log('is production')
}

// 强化安全
app.use(Helmet())
// 支持文件上传
app.use(koaBody({
  multipart: true,
  formidable: {
    keepExtensions: true,
    uploadDir: path.resolve(__dirname, './upload/'),
  },
}))

log4js.configure(path.join(__dirname, '../config/log4j.json'))
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(respond())

app.use(Cors({
  credentials: true,
}))

router.all('/graphql', graphqlHttp)

// API routes
require('./routes')(router)

app.use(router.routes())
app.use(router.allowedMethods())

app.use(koaStatic(`${__dirname}./upload/`))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`API server started on ${port}`))
