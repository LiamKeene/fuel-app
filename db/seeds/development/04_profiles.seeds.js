exports.seed = (knex, Promise) => (
  knex("profiles").del()
    .then(() => (
      knex("users").where({ role: "user" }).select("id")
    ))
    .then(users => (
      knex("profiles").insert([
        { user_id: users[0].id, first_name: "John", last_name: "Smith", avatar: "" },
        { user_id: users[1].id, first_name: "Tarou", last_name: "Yamada", avatar: "" },
      ])
    ))
)
