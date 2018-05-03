exports.up = (knex, Promise) => (
  knex.schema.createTable("vehicles", table => {
    table.increments()
    table.string("make")
    table.string("model")
    table.string("rego")
    table.timestamps()
  })
)

exports.down = (knex, Promise) => (
  knex.schema.dropTable("vehicles")
)
