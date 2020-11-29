import { gql } from "@apollo/client";

export const SET_POST = gql`
  mutation SavePost($title: String!,$body: String!, $slug: String!, $coverImg: String!, $cardImg: String!, $date: String!){
    savePost(input:{
      title:$title,
      body:$body,
      slug:$slug,
      cardImg:$cardImg,
      coverImg:$coverImg,
      date:$date
    }){
      id
      title
    }
  }
`