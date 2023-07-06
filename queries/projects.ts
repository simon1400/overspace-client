import { gql } from "@apollo/client";

const projectsQuery = gql`
  query Projects {
    projects(sort: "rank:asc") {
      data {
        attributes {
          title
          slug
          images {
            data{
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const getProject = gql`
  query Project($slug: String!) {
    projects(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          title
          images {
            data{
              attributes {
                url
              }
            }
          }
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

export const getProjectMeta = gql`
  query ProjectMeta($slug: String!) {
    projects(filters: {slug: {eq: $slug}}) {
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

export default projectsQuery