import bcrypt from "bcrypt"
import jwt    from "jsonwebtoken"

import { JWT_HMAC_SECRET } from "server/config"

export default {
  Mutation: {
    login: async (_, { email, password }, { models: { User } }) => {
      const user = await User.query().where({ email }).first()

      if (!user) {
        throw new Error("Email not found")
      }

      const validPassword = await bcrypt.compare(password, user.encryptedPassword)

      if (!validPassword) {
        throw new Error('Password is incorrect')
      }

      user.jwt = jwt.sign({
        id: user.uuid
      }, JWT_HMAC_SECRET)

      return user
    },
    signup: async (_, { email, password }, { models: { User } }) => {
      const existingUser = await User.query().where({ email }).first()

      if (existingUser) {
        throw new Error("Email already used")
      }

      const user = await User.create({ email, password })

      user.jwt = jwt.sign({
        id: user.uuid
      }, JWT_HMAC_SECRET)

      return user
    }
  }
}
