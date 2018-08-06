import React, { Component } from 'react'
import { object, func } from 'prop-types'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'
import { isEmpty } from 'ramda'
import { convertingTypes } from '../../utils/convertingTypes'
import { inputs } from './mock'

class UserForm extends Component {
  state = {
    name: '',
    age: 0,
    job: ''
  }

  componentWillMount() {
    const { user } = this.props
    if (user) {
      Object.keys(user)
        .map(item =>
          this.setState({
            [item]: user[item]
          })
        )
    }
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
    const buttonText = isEmpty(this.props.user) ? 'Create' : 'Update'

    return (
      <form>
        {inputs.map(
          (item, key) => this.renderInput(item, key)
        )}
        <Button
          bsStyle='success'
          onClick={this.handleSubmit}
        > 
          {buttonText}
        </Button>
      </form>
    )
  }
}

UserForm.propTypes = {
  user: object,
  submit: func
}

UserForm.defaultProps = {
  user: {},
  submit: () => {}
}

export default UserForm