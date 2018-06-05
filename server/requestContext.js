import Profile from "../models/Profile"
import Purchase from "../models/Purchase"
import User from "../models/User"
import Vehicle from "../models/Vehicle"

import { getUser } from "../server/authentication"

export const populateUser = async (request, _, next) => {
  const currentUser = await getUser(request.headers["authorization"], User)

  request.currentUser = currentUser

  next()
}

export const modelContext = {
  models: {
    Profile,
    Purchase,
    User,
    Vehicle,
  }
}
