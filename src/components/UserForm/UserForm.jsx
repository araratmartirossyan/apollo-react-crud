import React, { Component } from 'react'
import { bool, func } from 'prop-types'
import { graphql, compose } from 'react-apollo'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'
import { convertingTypes } from '../../utils/convertingTypes'
import { inputs } from './mock'
import userNewMutation from '../../graphql/UserAddMutation'

class UserForm extends Component {
  state = {
    name: '',
    age: 0,
    job: ''
  }

  handleSubmit = () =>
    this.props.submit({ userInput: this.state })

  handleChange = ({ target: { name, value, type } }) =>
    this.setState({
      [name]: convertingTypes(type, value)
    })

  renderInput = ({ name, label, placeholder, type }, key) =>
    <FormGroup controlId={name} key={key}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        name={name}
        placeholder={placeholder}
        value={this.state[name]}
        onChange={this.handleChange}
        type={type}
      />
    </FormGroup>

  render() {
    return (
      <form>
        {inputs.map(
          (item, key) => this.renderInput(item, key)
        )}
        <Button
          bsStyle="success"
          onClick={this.handleSubmit}
        > 
          Create
        </Button>
      </form>
    )
  }
}

UserForm.propTypes = {
  isFormOpen: bool,
  submit: func
}

UserForm.defaultProps = {
  isFormOpen: false,
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
)(UserForm)