import bcrypt from "bcrypt"
import crypto from "crypto"

import { BaseModel } from "db"

export default class User extends BaseModel {
  static tableName = "users"

  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString()
  }

  isAdmin = () => this.role === "admin"

  static find = async id => User.query().where({ id }).first()
  static all = async () => User.query()

  static create = async ({ email, password }) => {
    const encrypted_password = await bcrypt.hash(password, 10)
    const uuid = crypto.randomBytes(16).toString("hex")
    const role = "user"

    return await User.query().insert({
      uuid,
      email,
      encrypted_password,
      role
    })
  }

  static update = async (id, {
    email,
    password,
  }) => {
    return await User.query().update({
      email,
      password
    }).where({ id }).returning("*").first()
  }
}
