import { makeExecutableSchema } from 'graphql-tools'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date'

import { combineResolvers } from "apollo-resolvers"

import {
  AuthSchema,
  authResolvers
} from "./Auth"

import {
  UserSchema,
  userResolvers
} from "./User"

const projectResolvers = {
  DateTime: GraphQLDateTime
}

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }
`

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, AuthSchema, UserSchema],
  resolvers: combineResolvers([
    projectResolvers,
    userResolvers,
    authResolvers,
  ])
})
