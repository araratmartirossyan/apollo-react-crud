import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import UsersForm from '../../components/UserForm'
import userUpdateMutation from '../../graphql/UserEditMutation'
import { userQuery } from '../../graphql/UsersQuery'

class UsersEdit extends Component {
  handleSubmit = values => {
    const { submit, match: { params: { id } }} = this.props
    submit(id, values)
  } 

  render() {
    const { data: { User } } = this.props
    console.log(this.props.match)
    return (
      <div>
        {User &&
          <UsersForm
            submit={this.handleSubmit}
            user={User}
          />}
      </div>
    )
  }
}

export default compose(
  graphql(userQuery, {
    options: ({ match: { params } }) =>
      ({
        variables: { id: params.id },
        fetchPolicy: 'cache-and-network'
      })
  }),
  graphql(userUpdateMutation, {
    props: ({ mutate }) => ({
      submit: (id, { userInput }) =>
        mutate({ variables: { id, ...userInput } })
    })
  })
)(UsersEdit)
