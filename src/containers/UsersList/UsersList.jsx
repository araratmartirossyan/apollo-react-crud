import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Button } from 'react-bootstrap'
import { usersQuery } from '../../graphql/UsersQuery'
import { updateUsersArray } from '../../utils/updateUsersArray'
import deleteUserMutation from '../../graphql/UserDeleteMutation'
import UsersTable from '../../components/UsersTable'

import './UserList.css'

class UsersList extends Component {
  handleRemove = id => {
    const { submit, data: { refetch } } = this.props
    submit(id).then(() => refetch())
  }

  render() {
    const { data: { allUsers }, history: { push } } = this.props
    const users = allUsers && updateUsersArray(allUsers)
    if (allUsers && allUsers.length === 0) {
      return (
        <div className='empty-block'>
          <h2>You have not added any users.</h2>
          <Button onClick={() => push('/add')}>Add new character</Button>
        </div>
      )
    }
    return (
      <div className='list'>
        <Button onClick={() => push('/add')}>Add new character</Button>
        <div className='block'>
          {allUsers &&
            <UsersTable
              users={users}
              removeUser={this.handleRemove}
            />}
        </div>
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
