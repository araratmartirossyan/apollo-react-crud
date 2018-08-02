import gql from 'graphql-tag'

export default gql`
  mutation deleteUserMutation($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`
