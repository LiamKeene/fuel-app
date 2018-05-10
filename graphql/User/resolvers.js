import { createError } from "apollo-errors"

import { isAuthenticatedResolver } from "../aclResolvers"

const NotYourUserError = createError("NotYourUserError", {
  message: "You cannot update the profile for other users"
})

const updateUser = isAuthenticatedResolver.createResolver(
  async (_, { id, input }, { user, models: { User } }) => {
    /*
      If thrown, this error will bubble up to isAuthenticatedResolver's error callback
      (if present) and then to baseResolver's error callback.  If unhandled, the error
      is returned to the client within the `errors` array in the response.
    */
    if (!user.isAdmin() && id != user.id) throw new NotYourUserError()

    return await User.query().update(input).where({ id }).returning("*").first()
  },
)

export default {
  Query: {
    getUser: async (_, { id }, { models: { User } }) => (
      await User.query().where({ id }).first()
    ),
    getUsers: async () => (
      await User.query()
    ),
  },
  Mutation: {
    createUser: async (_, { input }, { models: { User } }) => (
      await User.query().insert(input)
    ),
    updateUser: updateUser,
  }
}
