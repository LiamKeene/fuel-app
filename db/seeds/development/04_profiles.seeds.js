exports.seed = (knex, Promise) => (
  knex("profiles").del()
    .then(() => (
      knex("profiles").insert([
        { id: 1, user_id: 2, first_name: "John", last_name: "Smith", avatar: "" },
        { id: 2, user_id: 3, first_name: "Tarou", last_name: "Yamada", avatar: "" },
      ])
    ))
)
