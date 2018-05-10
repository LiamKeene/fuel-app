import { createError } from "apollo-errors"

import { isAuthenticatedResolver } from "../aclResolvers"

const NotYourUserError = createError("NotYourUserError", {
  message: "You cannot update the profile for other users"
})

const getUser = isAuthenticatedResolver.createResolver(
  async (_, { id }, { currentUser, models: { User } }) => {
    if (!currentUser.isAdmin() && id != currentUser.id) throw new NotYourUserError()

    return await User.find(id)
  }
)

const updateUser = isAuthenticatedResolver.createResolver(
  async (_, { id, input }, { currentUser, models: { User } }) => {
    if (!currentUser.isAdmin() && id != currentUser.id) throw new NotYourUserError()

    return await User.update(id, input)
  },
)

export default {
  Query: {
    getUser: getUser,
    getUsers: async () => await User.all(),
  },
  Mutation: {
    createUser: async (_, { input }, { models: { User } }) => await User.query().insert(input),
    updateUser: updateUser,
  }
}
