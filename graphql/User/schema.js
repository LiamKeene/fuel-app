export default `
  scalar DateTime

  type User {
    id:                 ID!
    name:               String!
    role:               String!
    encrypted_password: String
    created_at:         DateTime
    updated_at:         DateTime
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
