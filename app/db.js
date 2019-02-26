import lodash from 'lodash'

const mysql = require('mysql2')
const dbConfig = require('../config/db')

let pool
export default () => {
  if (pool === undefined) {
    pool = mysql.createPool(lodash.merge({ connectionLimit: 10 }, dbConfig))
    pool = pool.promise()
  }
  return pool
}
