import { Model } from "objection"
import knex from "knex"

import config from "./knexfile.js"

const environment = process.env.NODE_ENV
const knexConfig = knex(config[environment])
Model.knex(knexConfig)

export class BaseModel extends Model {}

export class TimestampedModel extends BaseModel {
  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString()
  }
}

export default knexConfig
