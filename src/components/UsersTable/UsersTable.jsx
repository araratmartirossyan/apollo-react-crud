import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Query, graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import deleteUserMutation from '../../graphql/UserDeleteMutation'

import { tableHeading } from './users.mock'

const usersQuery = gql`
  {
    allUsers {
      id
      name
      age
      job
    }
  }
`;

class UsersTable extends Component {
  handleEdit = () => {}
 
  handleRemove = id => () =>
    this.props.submit(id)

  renderTh = ({ title }, key) =>
    <th key={key}>{title}</th>

  renderTd = (item, key) =>
    <td key={key}>{item}</td>

  render() {
    return (
      <Query query={usersQuery} pollInterval={500}>
        {({ loading, data: { allUsers } }) => {
          if (loading) {
            return null
          }

          return (
            <Table responsive>
              <thead>
                <tr>
                  {tableHeading.map(
                    (item, key) => this.renderTh(item, key)
                  )}
                </tr>
              </thead>
              <tbody>
                {allUsers.map((item, index) =>
                  <tr key={index}>
                    {Object.values(item)
                      .map(
                        (subItem, key) => this.renderTd(subItem, key)
                    )}
                    <th>
                      <Button onClick={this.handleRemove(item.id)}> Remove </Button>
                      <Button onClick={this.handleEdit(item.id)}> Edit </Button>
                    </th>
                  </tr>
                )}
              </tbody>
            </Table>
          )
        }}
      </Query>
    )
  }
}

export default compose(
  graphql(deleteUserMutation, {
    props: ({ mutate }) => ({
      submit: id =>
        mutate({
          variables: { id }
        })
    })
  })
)(UsersTable)
