import jwt from "jsonwebtoken"

import { JWT_HMAC_SECRET } from "./config"

export const getUser = async (authorization, User) => {
  const bearerLength = "Bearer ".length

  if (authorization && authorization.length > bearerLength) {
    const token = authorization.slice(bearerLength)

    const {
      success, result
    } = await new Promise(resolve => {
      jwt.verify(token, JWT_HMAC_SECRET, (error, result) => {

        if (error) {
          resolve({
            success: false,
            result: error
          })
        } else {
          resolve({
            success: true,
            result
          })
        }
      })
    })

    if (success) {
      return await User.query().where({ uuid: result.id }).first()
    }

    console.error(result)
    return null
  }

  return null
}
