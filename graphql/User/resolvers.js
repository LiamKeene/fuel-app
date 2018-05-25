import { createError } from "apollo-errors"

import { validate } from "email-validator"

import { isAuthenticatedResolver } from "../aclResolvers"

const NotYourUserError = createError("NotYourUserError", {
  message: "You cannot update the profile for other users"
})

const InvalidEmail = createError("NotAValidEmail", {
  message: "This does not appear to be a valid email"
})

const getUser = isAuthenticatedResolver.createResolver(
  async (_, { id }, { currentUser, models: { User } }) => {
    if (!currentUser.isAdmin() && id != currentUser.id) throw new NotYourUserError()

    return await User.find(id)
  }
)

const createUser = async (_, { input }, { models: { User } }) => {
  if (!validate(input.email)) throw new InvalidEmail

  return await User.create(input)
}

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
    createUser: createUser,
    updateUser: updateUser,
  }
}
