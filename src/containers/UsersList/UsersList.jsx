import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import UsersTable from '../../components/UsersTable'
import { usersQuery } from '../../graphql/UsersQuery'
import { updateUsersArray } from '../../utils/updateUsersArray'
import deleteUserMutation from '../../graphql/UserDeleteMutation'

class UsersList extends Component {

  handleRemove = id => {
    const { submit, data: { refetch } } = this.props
    submit(id).then(() => refetch())
  }

  render() {
    const { data: { allUsers } } = this.props
    const users = allUsers && updateUsersArray(allUsers)

    return (
      <div>
        {allUsers &&
          <UsersTable
            users={users}
            removeUser={this.handleRemove}
          />}
      </div>
    )
  }
}

export default compose(
  graphql(usersQuery, {
    options: () => ({ fetchPolicy: 'cache-and-network' })
  }),
  graphql(deleteUserMutation, {
    props: ({ mutate }) => ({
      submit: id =>
        mutate({
          variables: { id }
        })
    })
  })
)(UsersList)
