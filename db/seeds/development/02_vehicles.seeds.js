exports.seed = (knex, Promise) => (
  knex("vehicles").del()
    .then(() => (
      knex("users").where({ role: "user" }).select("id")
    ))
    .then(users => (
        knex("vehicles").insert([
          { user_id: users[0].id, make: "Toyota", model: "Corolla", rego: "ABC-123", year: 1991, odometer: 182234.0 },
          { user_id: users[0].id, make: "Subaru", model: "Impreza", rego: "BCD-456", year: 2009, odometer: 45123.1 },
          { user_id: users[1].id, make: "Holden", model: "SV6", rego: "XYZ-123", year: 2015, odometer: 5788.5 },
        ])
    ))
)
