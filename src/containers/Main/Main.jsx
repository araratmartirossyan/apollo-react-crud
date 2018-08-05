import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid, Jumbotron } from 'react-bootstrap'
import UsersList from '../UsersList'
import UsersAdd from '../UsersAdd'
import UsersEdit from '../UsersEdit'

const TITLE = 'Simple Apollo Crud'

export default class Main extends Component {
 
  render() {

    return (
      <Grid>
        <Jumbotron>
          <h1>{TITLE}</h1>
          <Route path="/list" component={UsersList} />
          <Route path="/add" component={UsersAdd} />
          <Route path="/edit/:id" component={UsersEdit} />
        </Jumbotron>
      </Grid>
    )
  }
}
