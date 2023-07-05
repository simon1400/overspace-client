import { gql } from "@apollo/client";

export const getArticle = gql`
  query Article($slug: String!) {
    articles(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          content
          meta{
            title
            description
          }
        }
      }
    }
  }
`

export const getArticleMeta = gql`
  query ArticleMeta($slug: String!) {
    articles(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          meta{
            title
            description
          }
        }
      }
    }
  }
`