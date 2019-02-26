import { makePromiseForQuery } from './common/common'

export const getTest = async () => {
  const query = `SELECT
    *
    FROM test
  `
  return makePromiseForQuery(query)
}
