import fs from "fs"
import path from "path"

import express from "express"
import graphqlHTTP from "express-graphql"
import morgan from "morgan"
import { buildSchema } from "graphql"

import schema from "./graphql"
import {
  modelContext,
  populateUser
} from "./server/requestContext"

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

const app = express()

app
  .use(morgan(':remote-addr - :remote-user [:date[clf]] :req[authorization] ":method :url HTTP/:http-version" :status :res[content-type] ":referrer" ":user-agent"', { stream: accessLogStream }))
  .use("/graphql", populateUser, graphqlHTTP(async ({ currentUser }) => ({
    schema:     schema,
    graphiql:   true,
    context:    {
      currentUser,
      ...modelContext
    }
  })))

app.listen(4000, () => console.log("Fuel App API listening on port 4000!"))
