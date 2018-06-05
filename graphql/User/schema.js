export default `
  scalar DateTime

  type User {
    id:                 ID!
    uuid:               String!
    email:              String!
    role:               String!
    encryptedPassword:  String
    createdAt:          DateTime
    updatedAt:          DateTime

    jwt:                String

    profile:            Profile
    vehicles:           [Vehicle]
  }

  input CreateUserInput {
    email:    String!
    password: String!
  }

  input UpdateUserInput {
    email:    String
    password: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  extend type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(id: ID!, input: UpdateUserInput): User
  }
`
