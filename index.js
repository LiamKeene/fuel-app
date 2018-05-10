import express from "express"
import graphqlHTTP from "express-graphql"
import { buildSchema } from "graphql"

import schema from "./graphql"
import reqContext from "./server/requestContext"

const app = express()

app.use("/graphql", graphqlHTTP(async (request) => ({
  schema:     schema,
  graphiql:   true,
  context:    await reqContext(request)
})))

app.listen(4000, () => console.log("Fuel App API listening on port 4000!"))
