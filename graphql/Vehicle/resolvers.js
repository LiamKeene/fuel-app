import { createError } from "apollo-errors"

import {
  isAuthenticatedResolver,
  isAdminResolver,
  requireAuthentication
} from "../aclResolvers"

const getVehicles = async (root, args, { currentUser, models: { Vehicle } }) => (
  await currentUser.$relatedQuery("vehicles")
)

const getVehicle = async (root, { id }, { currentUser, models: { Vehicle } }) => (
  await currentUser.$relatedQuery("vehicles").where({ id }).first()
)

const createVehicle = async (root, { input }, { currentUser, models: { Vehicle } }) => (
  await currentUser.$relatedQuery("vehicles").insert(input)
)

const updateVehicle = async (root, { id, input }, { currentUser, models: { Vehicle } }) => (
  await currentUser.$relatedQuery("vehicles").update(input).where({ id }).returning("*").first()
)

const deleteVehicle = async (root, { id, input }, { currentUser, models: { Vehicle } }) => (
  await currentUser.$relatedQuery("vehicles").delete().where({ id }).returning("*").first()
)

export default {
  Query: {
    getVehicles: requireAuthentication(getVehicles),
    getVehicle:  requireAuthentication(getVehicle),
  },
  Mutation: {
    createVehicle: requireAuthentication(createVehicle),
    updateVehicle: requireAuthentication(updateVehicle),
    deleteVehicle: requireAuthentication(deleteVehicle),
  },
  Vehicle: {
    user: async (vehicle, _, { models: { User }}) => (
      await User.query().where({ id: vehicle.userId }).first()
    )
  }
}
