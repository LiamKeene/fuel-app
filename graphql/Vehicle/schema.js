export default `
  type Vehicle {
    id:         ID!
    make:       String
    model:      String
    rego:       String
    created_at: DateTime
    updated_at: DateTime
  }

  input VehicleInput {
    make:   String
    model:  String
    rego:   String
  }

  extend type Query {
    getVehicles: [Vehicle]
    getVehicle(id: ID!): Vehicle
  }

  extend type Mutation {
    createVehicle(input: VehicleInput): Vehicle
    updateVehicle(id: ID!, input: VehicleInput): Vehicle
    deleteVehicle(id: ID!): Vehicle
  }
`
