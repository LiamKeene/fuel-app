import dotenv from "dotenv"

dotenv.config({ silent: true })

export const {
  JWT_HMAC_SECRET
} = process.env

const defaults = {
  JWT_HMAC_SECRET: "a-development-hmac"
}

Object.keys(defaults).map(key => {
  if (!process.env[key] || process.env[key] == defaults[key]) {
    throw new Error(`Please enter a custom value for ${key} in .env!`)
  }
})
