import { TimestampedModel } from "db"

export default class Vehicle extends TimestampedModel {
  static tableName = "vehicles"
}
