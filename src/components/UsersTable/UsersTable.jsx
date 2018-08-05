import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { tableHeading } from './users.mock'

export default class UsersTable extends Component {
 
  handleRemove = id => () =>
    this.props.removeUser(id)

  renderTh = ({ title }, key) =>
    <th key={key}>{title}</th>

  renderTd = (item, key) =>
    <td key={key}>{item}</td>

  render() {
    const { users = [] } = this.props
    console.log(this.props)
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
          {users.map((item, index) =>
            <tr key={index}>
              {Object.values(item)
                .map(
                  (subItem, key) => this.renderTd(subItem, key)
                )
              }
              <th>
                <Button
                  onClick={this.handleRemove(item.id)}
                  bsStyle='danger'
                >
                  Remove
                </Button>
                <Link to={`/edit/${item.id}`}> Edit </Link>
              </th>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
}
