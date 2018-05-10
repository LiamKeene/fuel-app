import express from "express"
import graphqlHTTP from "express-graphql"
import { buildSchema } from "graphql"

import schema from "./graphql"
import {
  modelContext,
  populateUser
} from "./server/requestContext"

const app = express()

app.use("/graphql", populateUser, graphqlHTTP(async ({ currentUser }) => ({
  schema:     schema,
  graphiql:   true,
  context:    {
    currentUser,
    ...modelContext
  }
})))

app.listen(4000, () => console.log("Fuel App API listening on port 4000!"))
