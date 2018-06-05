import {
  requireAuthentication
} from "../aclResolvers"

const getProfile = async (_, __, { currentUser, models: { Profile } }) => (
  await currentUser.$relatedQuery("profile")
)

const updateProfile = async (_, { input }, { currentUser, models: { Profile } }) => (
  await currentUser.$relatedQuery("profile").update(input).returning("*").first()
)

export default {
  Query: {
    getProfile: requireAuthentication(getProfile)
  },
  Mutation: {
    updateProfile: requireAuthentication(updateProfile)
  },
  Profile: {
    user: async (profile, _, { models: { User } }) => (
      await User.query().where({ id: profile.userId }).first()
    )
  }
}
