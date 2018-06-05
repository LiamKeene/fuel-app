export default `
  type Profile {
    id:         ID!
    firstName:  String
    lastName:   String
    avatar:     String
    createdAt:  DateTime
    updatedAt:  DateTime

    user:       User!
  }

  input ProfileInput {
    first_name: String
    last_name:  String
    avatar:     String
  }

  extend type Query {
    getProfile: Profile
  }

  extend type Mutation {
    updateProfile(input: ProfileInput): Profile
  }
`
