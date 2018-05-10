import User from "../models/User"
import { currentUser } from "../server/authentication"

export default async request => {
  const user = await currentUser(request.headers["authorization"], User)

  return {
    request,
    user,
    models: {
      User
    }
  }
}
