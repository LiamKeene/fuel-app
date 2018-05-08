export const resolvers = User => ({
  Query: {
    getUser: async (_, { id }, context) => (
      await User.query().where({ id }).first()
    ),
    getUsers: async () => (
      await User.query()
    ),
  },
  Mutation: {
    createUser: async (_, { input }, context) => (
      await User.query().insert(input)
    ),
    updateUser: async (_, { id, input }, context) => (
      await User.query().update(input).where({ id }).returning("*").first()
    ),
  }
})
