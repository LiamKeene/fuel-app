import { createError } from "apollo-errors"

import {
  isAuthenticatedResolver,
  isAdminResolver,
  requireAuthentication
} from "../aclResolvers"

const getAllPurchases = async (_, __, { currentUser, models: { Purchase } }) => (
  await Purchase.query().innerJoin("vehicles", { "vehicles.id": "purchases.vehicle_id" }).where({ "vehicles.userId": currentUser.id })
)

const getPurchases = async (_, { vehicle_id }, { currentUser, models: { Purchase } }) => {
  const vehicle = await currentUser.$relatedQuery("vehicles").where({ id: vehicleId }).first()
  return await vehicle.$relatedQuery("purchases")
}

export default {
  Query: {
    getAllPurchases:  requireAuthentication(getAllPurchases),
    getPurchases:     requireAuthentication(getPurchases)
  },
  Mutation: {

  },
  Purchase: {
    vehicle: async (purchase, _, { models: { Vehicle } }) => (
      await Vehicle.query().where({ id: purchase.vehicleId }).first()
    )
  }
}
