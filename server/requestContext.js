import User from "../models/User"
import Purchase from "../models/Purchase"
import Vehicle from "../models/Vehicle"
import { getUser } from "../server/authentication"

export const populateUser = async (request, _, next) => {
  const currentUser = await getUser(request.headers["authorization"], User)

  request.currentUser = currentUser

  next()
}

export const modelContext = {
  models: {
    User,
    Purchase,
    Vehicle,
  }
}
