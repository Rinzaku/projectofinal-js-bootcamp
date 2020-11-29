const { gql } = require("apollo-server");

export const Post = gql`
  type Post {
    id: Int
    title: String
    body: String
    slug: String
    date: String
    coverImg: String
    cardImg: String
    author: Author
    category: [Category]
  }
  input PostInput {
    title: String
    body: String
    slug: String
    date: String
    coverImg: String
    cardImg: String
    author: AuthorInput
    category: [CategoryInput]
  }
`;