const bcrypt = require("bcrypt")
const crypto = require("crypto")

exports.seed = (knex, Promise) => (
  knex("users").del()
    .then(async () => {
      const adminUser = {
        email: "admin@test.com",
        role: "admin",
        uuid: crypto.randomBytes(16).toString("hex"),
        encrypted_password: await bcrypt.hash("password", 10)
      }
      const user1 = {
        email: "user1@test.com",
        role: "user",
        uuid: crypto.randomBytes(16).toString("hex"),
        encrypted_password: await bcrypt.hash("password", 10)
      }
      const user2 = {
        email: "user2@test.com",
        role: "user",
        uuid: crypto.randomBytes(16).toString("hex"),
        encrypted_password: await bcrypt.hash("password", 10)
      }
      return await knex("users").insert([
        adminUser,
        user1,
        user2
      ])
    })
)
