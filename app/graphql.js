import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas'

const graphqlHTTP = require('koa-graphql')
const { buildSchema } = require('graphql')

const path = require('path')
// 名称为index的将被过滤，下面的resolve同
const typesArray = fileLoader(path.join(__dirname, './schema/'), { extensions: ['.graphql'] })
const types = mergeTypes(typesArray)

const resolversArray = fileLoader(path.join(__dirname, './resolver'), { extensions: ['.js'] })
const resolvers = mergeResolvers(resolversArray)

const schema = buildSchema(types)

const graphql = graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
})

export default graphql
