import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { func } from 'prop-types'
import userNewMutation from '../../graphql/UserAddMutation'
import UsersForm from '../../components/UserForm'

class UsersAdd extends Component {
  render() {
    const { submit } = this.props

    return (
      <UsersForm
        submit={submit}
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
  graphql(userNewMutation, {
    props: ({ mutate }) => ({
      submit: ({ userInput }) =>
        mutate({
          variables: userInput
        })
    })
  })
)(UsersAdd)
