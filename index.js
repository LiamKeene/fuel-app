import express from "express"
import graphqlHTTP from "express-graphql"
import { buildSchema } from "graphql"

import schema from "./graphql"

const app = express()

app.use("/graphql", graphqlHTTP({
  schema:     schema,
  graphiql:   true
}))

app.listen(4000, () => console.log("Fuel App API listening on port 4000!"))
