import express from "express"
import graphqlHTTP from "express-graphql"
import { buildSchema } from "graphql"

import schema from "./graphql"
import User from "./models/User"
import { currentUser } from "./server/authentication"

const app = express()

const contextFn = async request => {
  const user = await currentUser(request.headers["authorization"], User)
  console.log("user", user)
  return {
    request,
    user
  }
}

app.use("/graphql", graphqlHTTP((request) => ({
  schema:     schema,
  graphiql:   true,
  context:    contextFn(request)
})))

app.listen(4000, () => console.log("Fuel App API listening on port 4000!"))
