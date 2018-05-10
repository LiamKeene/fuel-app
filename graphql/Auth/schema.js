export default `
  type Mutation {
    login(email: String!, password: String!): User
    signup(email: String!, password: String!): User
  }
`
