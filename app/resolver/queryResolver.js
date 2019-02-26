import { getTest } from '../dao/queryDao'
import { getLogger } from '../logger'

const logger = getLogger()

export default {
  getText: async () => {
    try {
      const [result] = await getTest()
      return result
    } catch (e) {
      logger.error(`Reason: graphql query getText error, Date:${new Date().toLocaleString()}, error:${e}`)
      throw e
    }
  },
}
