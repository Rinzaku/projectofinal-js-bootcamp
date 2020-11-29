const { gql } = require("apollo-server");

export const Category = gql`
  type Category {
    id: Int
    label: String
    desc: String
    slug: String
    post: Post
  }
  input CategoryInput {
    label: String
    desc: String
    slug: String
    post: PostInput
  }
`;