const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks : [Book]!
  }

  type Book  {
    _id: ID
    authors : [String]!
    description: String
    title: String
    image: String
    link: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookText: String!): Book
    removeBook(bookId: ID!): Book
   
  }
`;

module.exports = typeDefs;