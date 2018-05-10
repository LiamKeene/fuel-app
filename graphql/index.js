import { makeExecutableSchema } from 'graphql-tools'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date'

import { combineResolvers } from "apollo-resolvers"

import knex from "db"

import User from "models/User"

import AuthSchema from "./Auth/schema"
import authResolvers from "./Auth/resolvers"
import UserSchema from "./User/schema"
import userResolvers from "./User/resolvers"

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
    userResolvers(User),
    authResolvers(User)
  ])
})
