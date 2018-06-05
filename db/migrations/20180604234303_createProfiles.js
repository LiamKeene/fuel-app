exports.up = (knex, Promise) => (
  knex.schema.createTable("profiles", table => {
    table.increments("id").primary
    table.integer("user_id").unsigned().index().references("id").inTable("users").onDelete("CASCADE")
    table.string("first_name")
    table.string("last_name")
    table.string("avatar")
    table.timestamps()
  })
)

exports.down = (knex, Promise) => (
  knex.schema.dropTable("profiles")
)
