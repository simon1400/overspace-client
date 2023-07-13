import { gql } from "@apollo/client";

export const getHomepageMeta = gql`
  query HomepageMeta {
    homepage {
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