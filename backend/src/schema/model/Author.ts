const { gql } = require("apollo-server");

export const Author = gql`
  type Author {
    id: Int
    name: String
    lastname: String
    email: String
    post: [Post]
  }
  input AuthorInput {
    name: String
    lastname: String
    email: String
    post: [PostInput]
  }
`;