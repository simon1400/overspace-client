import { gql } from "@apollo/client";

const navQuery = gql`
  query Nav {
    nav {
      data {
        attributes {
          topNav{
            title
            link
          }
          soc{
            icon
            link
          }
        }
      }
    }
  }
`

export default navQuery