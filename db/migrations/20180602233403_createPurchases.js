exports.up = (knex, Promise) => (
  knex.schema.createTable("purchases", table => {
    table.increments("id").primary
    table.integer("vehicle_id").unsigned().index().references("id").inTable("vehicles").onDelete("CASCADE")
    table.decimal("odometer").index()
    table.decimal("quantity")
    table.boolean("filled").index()
    table.timestamps()
  })
)

exports.down = (knex, Promise) => (
  knex.schema.dropTable("purchases")
)
