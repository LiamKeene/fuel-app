exports.seed = (knex, Promise) => (
  knex("users").del()
    .then(() => (
      knex("users").insert([
        {
          id: 1,
          email: "admin@test.com",
          role: "admin",
        }
      ])
    ))
)
