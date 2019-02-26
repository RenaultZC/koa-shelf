import getConnectionPool from '../../db'
import { getLogger } from '../../logger'

const logger = getLogger()

/**
 * @method makePromiseForQuery
 * @param {String} query 查询语句
 * @param {Array} params 查询参数
 * @return {Promise} 查询结果
 */
export const makePromiseForQuery = async (query, params = []) => {
  const connection = getConnectionPool()
  try {
    return await connection.query(query, params)
  } catch (e) {
    logger.error(`Query: ${query}, params: ${params}, error: ${e}`)
    throw e
  }
}

/**
 * @method makePromiseForExecute
 * @param {String} query 更新语句
 * @param {Array} params 更新参数
 * @return {Promise} 更新结果
 */
export const makePromiseForExecute = async (query, params = []) => {
  const connection = getConnectionPool()
  try {
    return await connection.execute(query, params)
  } catch (e) {
    logger.error(`Execute: ${query}, params: ${params}, error: ${e}`)
    throw e
  }
}
