import React, { Component } from 'react'
import { Grid, Button } from 'react-bootstrap'
import UsersTable from '../../components/UsersTable'
import UserForm from '../../components/UserForm'

import './Main.css'

export default class Main extends Component {
  state = {
    isFormOpen: false
  }

  handleCreateUser = () =>
    this.setState({
      isFormOpen: !this.state.isFormOpen
    })

  render() {
    const { isFormOpen } = this.state
    const buttonText = isFormOpen ? 'Close form' : 'Add new character'

    return (
      <div className='container'>
        <Grid>
          <div className='main'>
            <div className='main-header'>
              <Button
                bsStyle='primary'
                onClick={this.handleCreateUser}
              >
                {buttonText}
              </Button>
            </div>
            {isFormOpen && <UserForm />}
            <UsersTable />
          </div>
        </Grid>
      </div>
    )
  }
}
