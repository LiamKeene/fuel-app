import { createError } from "apollo-errors"

import { isAuthenticatedResolver } from "../auth/resolvers"

const NotYourUserError = createError("NotYourUserError", {
  message: "You cannot update the profile for other users"
})

export default User => ({
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
    updateUser: async (_, { id, input }, { user }) => {
      /*
        If thrown, this error will bubble up to isAuthenticatedResolver's error callback
        (if present) and then to baseResolver's error callback.  If unhandled, the error
        is returned to the client within the `errors` array in the response.
      */
      if (!user.isAdmin() && id !== user.id) throw new NotYourUserError()

      return await User.query().update(input).where({ id }).returning("*").first()
    },
  }
})
