import bcrypt from "bcrypt"

import { BaseModel } from "db"

export default class User extends BaseModel {
  static tableName = "users"

  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString()
  }

  static create = async ({ email, password }) => {
    const hash = await bcrypt.hash(password, 10)
    console.log(email, password, hash)
    return await User.query().insert({ email, encrypted_password: hash })
  }
}
