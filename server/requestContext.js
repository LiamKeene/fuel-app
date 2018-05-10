import User from "../models/User"
import { getUser } from "../server/authentication"

export default async request => {
  const currentUser = await getUser(request.headers["authorization"], User)

  return {
    request,
    currentUser,
    models: {
      User
    }
  }
}
