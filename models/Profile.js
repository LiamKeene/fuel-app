import { TimestampedModel } from "db"

import User from "./User"

export default class Profile extends TimestampedModel {
  static tableName = "profiles"

  static relationMappings = {
    user: {
      relation: Profile.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "profiles.userId",
        to:   "users.id"
      }
    }
  }
}
