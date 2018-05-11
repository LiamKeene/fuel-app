exports.up = (knex, Promise) => (
  knex.schema.createTable("vehicles", table => {
    table.increments("id").primary
    table.integer("user_id").unsigned().index().references("id").inTable("users")
    table.string("make")
    table.string("model")
    table.string("rego")
    table.timestamps()
  })
)

exports.down = (knex, Promise) => (
  knex.schema.dropTable("vehicles")
)
