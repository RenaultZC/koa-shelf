import { getLogger } from '../logger'

const logger = getLogger()

module.exports = router => {
  router.all('/test', async ctx => {
    try {
      ctx.ok('ok')
    } catch (e) {
      ctx.internalServerError('error')
      logger.error(`Reason: test error, Date:${new Date().toLocaleString()}, error:${e}`)
    }
  })
}
