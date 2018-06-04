exports.seed = (knex, Promise) => (
  knex("vehicles").del()
    .then(() => (
      knex("vehicles").insert([
        { id: 1, user_id: 2, make: "Toyota", model: "Corolla", rego: "ABC-123", year: 1991, odometer: 182234.0 },
        { id: 2, user_id: 2, make: "Subaru", model: "Impreza", rego: "BCD-456", year: 2009, odometer: 45123.1 },
        { id: 3, user_id: 3, make: "Holden", model: "SV6", rego: "XYZ-123", year: 2015, odometer: 5788.5 },
      ])
    ))
)
