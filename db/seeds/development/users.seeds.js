exports.seed = (knex, Promise) => (
  knex("users").del()
    .then(() => (
      knex("users").insert([
        {
          id: 1,
          name: "Liam",
          role: "admin",
        }
      ])
    ))
)
