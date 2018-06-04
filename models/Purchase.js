import { TimestampedModel } from "db"

export default class Purchase extends TimestampedModel {
  static tableName = "purchases"

  static relationMappings = {
    user: {
      relation: Purchase.HasOneThroughRelation,
      modelClass: "User",
      join: {
        from: 'purchases.vehicleId',
        through: {
          // persons_movies is the join table.
          from: 'vehicles.id',
          to: 'vehicles.userId'
        },
        to: 'users.id'
      }
    },
    vehicle: {
      relation: Purchase.BelongsToOneRelation,
      modelClass: __dirname + "/Vehicle",
      join: {
        from: "purchases.vehicleId",
        to:   "vehicles.id"
      }
    },
  }
}
