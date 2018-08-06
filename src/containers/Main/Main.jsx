import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid, Jumbotron, PageHeader } from 'react-bootstrap'
import routes from '../../routes'

const TITLE = 'Simple Apollo Crud'

export default class Main extends Component {
 
  render() {
    return (
      <div>
        <PageHeader />
        <Grid>
          <h1>{TITLE}</h1>
          <Jumbotron>
            {routes.map((route, key) =>
              <Route {...route} key={key} />)
            }
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
