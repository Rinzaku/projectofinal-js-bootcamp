import { gql } from "apollo-server";
import { Author } from "./model/Author";
import { Post } from "./model/Post";
import { User } from "./model/User";
import { Category } from "./model/Category"
import { Mutation } from "./operation/Mutation";
import { Query } from "./operation/Query";

export const typeDefs = gql`
  ${Category}
  ${Post}
  ${Author}
  ${User}
  ${Query}
  ${Mutation}
`