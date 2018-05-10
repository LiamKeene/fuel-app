import bcrypt from "bcrypt"
import jwt    from "jsonwebtoken"

export default User => ({
  Mutation: {
    login: async (_, { email, password }, context) => {
      const user = await User.query().where({ email }).first()

      if (!user) {
        throw new Error("Email not found")
      }

      const validPassword = await bcrypt.compare(password, user.encrypted_password)

      if (!validPassword) {
        throw new Error('Password is incorrect')
      }

      user.jwt = jwt.sign({
        id: user.uuid
      }, "ABC123")

      return user
    },
    signup: async (_, { email, password }) => {
      const existingUser = await User.query().where({ email }).first()

      if (existingUser) {
        throw new Error("Email already used")
      }

      const user = await User.create({ email, password })

      user.jwt = jwt.sign({
        id: user.uuid
      }, "ABC123")

      return user
    }
  }
})
