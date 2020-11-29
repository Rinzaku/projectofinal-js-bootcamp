const { gql } = require("apollo-server");

export const Query = gql`
  type Query {
    login(email:String!, password:String!): String
    users: [User]
    user(id:Int!): User
    post(id:Int!): Post
    posts: [Post]
    author(id: Int!): Author
    authors: [Author]
    category(id: Int!): Category
    categories: [Category]
  }
`;
