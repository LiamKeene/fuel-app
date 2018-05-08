export default `
  scalar DateTime

  type User {
    id:                 ID!
    name:               String!
    role:               String!
    encryptedPassword:  String
    createdAt:          DateTime
    updatedAt:          DateTime
  }

  input UserInput {
    name: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
  }
`
