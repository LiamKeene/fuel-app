export default `
  scalar DateTime

  type User {
    id:                 ID!
    email:               String!
    role:               String!
    encrypted_password: String
    created_at:         DateTime
    updated_at:         DateTime
  }

  input UserInput {
    email: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  extend type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
  }
`
