import gql from 'graphql-tag'

export const userQuery = gql`
  query User($id: ID!) {
    User(id: $id) {
      id
      age
      job
      name
    }
  }
`

export const usersQuery = gql`
   query {
    allUsers {
      id
      name
      age
      job
    }
  }
`
