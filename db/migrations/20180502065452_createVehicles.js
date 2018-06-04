exports.up = (knex, Promise) => (
  knex.schema.createTable("vehicles", table => {
    table.increments("id").primary
    table.integer("user_id").unsigned().index().references("id").inTable("users").onDelete("CASCADE")
    table.string("make")
    table.string("model")
    table.string("rego").index()
    table.decimal("odometer")
    table.integer("year")
    table.timestamps()
  })
)

exports.down = (knex, Promise) => (
  knex.schema.dropTable("vehicles")
)
