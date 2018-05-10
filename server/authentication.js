import jwt    from "jsonwebtoken"

export const getUser = async (authorization, User) => {
  const bearerLength = "Bearer ".length

  if (authorization && authorization.length > bearerLength) {
    const token = authorization.slice(bearerLength)

    const {
      success, result
    } = await new Promise(resolve => {
      jwt.verify(token, "ABC123", (error, result) => {

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
