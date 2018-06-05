import bcrypt from "bcrypt"
import crypto from "crypto"

import { TimestampedModel } from "db"

// import Profile from "./Profile"
// import Vehicle from "./Vehicle"

export default class User extends TimestampedModel {
  static tableName = "users"

  static get jsonSchema() {
    return {
      type:       "object",
      "required": ["email"],
    }
  }

  static relationMappings = {
    profile: {
      relation: User.HasOneRelation,
      modelClass: __dirname + "/Profile",
      join: {
        from: "users.id",
        to:   "profiles.userId"
      }
    },
    vehicles: {
      relation: User.HasManyRelation,
      modelClass: __dirname + "/Vehicle",
      join: {
        from: "users.id",
        to:   "vehicles.userId"
      }
    }
  }

  static find = async id => User.query().where({ id }).first()
  static all = async () => User.query()

  static create = async ({ email, password }) => {
    const encryptedPassword = await bcrypt.hash(password, 10)
    const uuid = crypto.randomBytes(16).toString("hex")
    const role = "user"

    return await User.query().insertGraph({
      uuid,
      email,
      encryptedPassword,
      role,
      profile: {
        first_name: "",
        last_name: "",
        avatar: ""
      }
    })
  }

  static update = async (id, {
    email,
  }) => {
    return await User.query().update({
      email,
    }).where({ id }).returning("*").first()
  }

  isAdmin = () => this.role === "admin"
}
