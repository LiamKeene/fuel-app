import bcrypt from "bcrypt"

export default User => ({
  Mutation: {
    login: async (_, { email, password }, context) => {
      const existingUser = await User.query().where({ email }).first()

      if (!existingUser) {
        throw new Error("Email not found")
      }

      const validPassword = await bcrypt.compare(password, existingUser.encrypted_password)

      if (!validPassword) {
        throw new Error('Password is incorrect')
      }

      return existingUser
    },
    signup: async (_, { email, password }) => {
      const existingUser = await User.query().where({ email }).first()

      if (existingUser) {
        throw new Error("Email already used")
      }

      return await User.create({ email, password })
    }
  }
})
