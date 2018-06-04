export default `
  type Purchase {
    id:             ID!

    odometer:       Float!
    quantity:       Float!
    filled:         Boolean!
    timePurchased:  String

    createdAt:      DateTime
    updatedAt:      DateTime

    vehicle:        Vehicle!
  }

  input PurchaseInput {
    vehicleId:  Int!
    odometer:   Float!
    quantity:   Float!
    filled:     Boolean!
  }

  extend type Query {
    getAllPurchases: [Purchase]
    getPurchases(vehicleId: Int!): [Purchase]
    getPurchase(id: ID!): Purchase
  }

  extend type Mutation {
    createPurchase(input: PurchaseInput): Purchase
  }
`
