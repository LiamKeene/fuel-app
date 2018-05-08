exports.up = (knex, Promise) => (
  knex.schema.createTable("users", table => {
    table.increments("id").primary
    table.string("name")
    table.string("role")
    table.string("encrypted_password")
    table.timestamps()
  })
)

exports.down = (knex, Promise) => (
  knex.schema.dropTable("users")
)
