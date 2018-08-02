import gql from 'graphql-tag'

export default gql`
  mutation userNewMutation($name: String! $job: String! $age: Int!) {
    createUser(name: $name, job: $job, age: $age) {
      id
      name
      age
      job
    }
  }
`