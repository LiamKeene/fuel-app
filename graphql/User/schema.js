export default `
  scalar DateTime

  type User {
    id:                 ID!
    uuid:               String!
    email:              String!
    role:               String!
    encrypted_password: String
    created_at:         DateTime
    updated_at:         DateTime

    jwt:                String
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
