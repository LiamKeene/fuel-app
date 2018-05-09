import { BaseModel } from "db"

export default class User extends BaseModel {
  static tableName = "users"

  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString()
  }
}
