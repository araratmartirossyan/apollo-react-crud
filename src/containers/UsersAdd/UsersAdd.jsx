import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { func } from 'prop-types'
import { usersQuery } from '../../graphql/UsersQuery'
import userNewMutation from '../../graphql/UserAddMutation'
import UsersForm from '../../components/UserForm'

class UsersAdd extends Component {
  handleSubmit = ({ userInput }) => {
    const {
      submit,
      data: { refetch },
      history: { push }
    } = this.props
    submit(userInput)
      .then(() => refetch())
      .then(() => push('/list'))
  }

  render() {
    return (
      <UsersForm
        submit={this.handleSubmit}
        isEditing={false}
      />
    )
  }
}

UsersAdd.propTypes = {
  submit: func
}

UsersAdd.defaultProps = {
  submit: () => {}
}

export default compose(
  graphql(usersQuery, {
    options: () => ({ fetchPolicy: 'cache-and-network' })
  }),
  graphql(userNewMutation, {
    props: ({ mutate }) => ({
      submit: userInput =>
        mutate({
          variables: userInput
        })
    })
  })
)(UsersAdd)
