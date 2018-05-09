import { makeExecutableSchema } from 'graphql-tools'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date'

import { combineResolvers } from "apollo-resolvers"

import knex from "db"

import User from "models/User"

import UserSchema from "./User/schema"
import { resolvers } from "./User/resolvers"

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
  typeDefs: [SchemaDefinition, UserSchema],
  resolvers: combineResolvers([
    projectResolvers,
    resolvers(User)
  ])
})
