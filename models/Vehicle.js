import { TimestampedModel } from "db"

import User from "./User"

export default class Vehicle extends TimestampedModel {
  static tableName = "vehicles"

  static relationMappings = {
    user: {
      relation: Vehicle.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "vehicles.userId",
        to:   "users.id"
      }
    },
    purchases: {
      relation: Vehicle.HasManyRelation,
      modelClass: __dirname + "/Purchase",
      join: {
        from: "vehicles.id",
        to:   "purchases.vehicleId"
      }
    }
  }
}
