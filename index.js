const express     = require("express")
const graphqlHTTP = require("express-graphql")
const { buildSchema } = require("graphql")

const config      = require("./knexfile.js")
const env         = "development"

const knex = require("knex")(config[env])

const app = express()

const schema = buildSchema(`
  input VehicleInput {
    make:   String
    model:  String
    rego:   String
  }

  type Vehicle {
    id: ID!
    make:   String
    model:  String
    rego:   String
  }

  type Query {
    getVehicle(id: ID!): Vehicle
  }

  type Mutation {
    createVehicle(input: VehicleInput): Vehicle
    updateVehicle(id: ID!, input: VehicleInput): Vehicle
  }
`)

class VehicleInput {
  constructor(id, {
    make,
    model,
    rego,
  }) {
    this.id     = id
    this.make   = make
    this.model  = model
    this.rego   = rego
  }
}

const root = {
  async getVehicle({ id }) {
    return await knex("vehicles").where("id", id).first()
  },
  async createVehicle({ input }) {
    const [res, ...rest] = await knex("vehicles").insert(input, "id")
    return await knex("vehicles").where("id", res).first()
  },
  async updateVehicle({ id, input }) {
    await knex("vehicles").update(input).where("id", id)
    return await knex("vehicles").where("id", id).first()
  },
}

app.use("/graphql", graphqlHTTP({
  schema:     schema,
  rootValue:  root,
  graphiql:   true
}))

app.listen(4000, () => console.log("Fuel App API listening on port 4000!"))
